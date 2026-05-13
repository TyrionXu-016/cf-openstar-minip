from __future__ import annotations

from sqlalchemy import delete, desc, func, select, update
from sqlalchemy.orm import Session

from app.db.models import FavoritePosition, StudentProfile, StudyStats
from app.modules.student_profiles.schemas import (
    StudentProfileCreate,
    StudentProfileItem,
    StudentProfileUpdate,
)
from app.modules.study_stats.service import _cap_correct, _merge_today


def _apply_payload_to_row(row: StudentProfile, payload: StudentProfileCreate) -> None:
    row.name = payload.name.strip()
    row.phone = payload.phone.strip()
    row.age = payload.age
    row.gender = payload.gender.strip()
    row.education = payload.education.strip()
    row.school = (payload.school or "").strip() or None
    row.major = payload.major.strip()
    row.exam_type = payload.examType.strip()


def create_student_profile(db: Session, payload: StudentProfileCreate) -> StudentProfileItem:
    """同手机号只保留一条：有则更新最新一条并删掉同号其它行，无则新建。"""
    phone = payload.phone.strip()
    rows = list(
        db.scalars(
            select(StudentProfile).where(StudentProfile.phone == phone).order_by(desc(StudentProfile.created_at), desc(StudentProfile.id))
        ).all()
    )
    if rows:
        keep = rows[0]
        _apply_payload_to_row(keep, payload)
        for r in rows[1:]:
            db.delete(r)
        db.commit()
        db.refresh(keep)
        return _to_item(keep)

    row = StudentProfile(
        name=payload.name.strip(),
        phone=phone,
        age=payload.age,
        gender=payload.gender.strip(),
        education=payload.education.strip(),
        school=(payload.school or "").strip() or None,
        major=payload.major.strip(),
        exam_type=payload.examType.strip(),
        source="mini",
    )
    db.add(row)
    db.commit()
    db.refresh(row)
    return _to_item(row)


def get_student_profile(db: Session, profile_id: int) -> StudentProfileItem | None:
    row = db.get(StudentProfile, profile_id)
    if not row:
        return None
    return _to_item(row)


def update_student_profile(db: Session, profile_id: int, payload: StudentProfileUpdate) -> StudentProfileItem | None:
    row = db.get(StudentProfile, profile_id)
    if not row:
        return None
    data = payload.model_dump(exclude_unset=True)
    if not data:
        return _to_item(row)

    new_phone = data.get("phone")
    if new_phone is not None:
        new_phone = str(new_phone).strip()
        conflict = db.scalar(
            select(StudentProfile.id).where(StudentProfile.phone == new_phone, StudentProfile.id != profile_id)
        )
        if conflict is not None:
            raise ValueError("该手机号已被其它学员档案占用，请使用「换号迁移」接口合并。")

    if "name" in data and data["name"] is not None:
        row.name = str(data["name"]).strip()
    if new_phone is not None:
        row.phone = new_phone
    if "age" in data and data["age"] is not None:
        row.age = int(data["age"])
    if "gender" in data and data["gender"] is not None:
        row.gender = str(data["gender"]).strip()
    if "education" in data and data["education"] is not None:
        row.education = str(data["education"]).strip()
    if "school" in data:
        row.school = (str(data["school"]).strip() if data["school"] is not None else "") or None
    if "major" in data and data["major"] is not None:
        row.major = str(data["major"]).strip()
    if "examType" in data and data["examType"] is not None:
        row.exam_type = str(data["examType"]).strip()

    db.commit()
    db.refresh(row)
    return _to_item(row)


def delete_student_profile(db: Session, profile_id: int) -> bool:
    row = db.get(StudentProfile, profile_id)
    if not row:
        return False
    db.delete(row)
    db.commit()
    return True


def _dedupe_profiles_by_phone_impl(db: Session) -> int:
    """同手机号多条档案时保留最新一条，删除其余（不 commit）。"""
    dup_phones = db.scalars(
        select(StudentProfile.phone).group_by(StudentProfile.phone).having(func.count(StudentProfile.id) > 1)
    ).all()
    removed = 0
    for phone in dup_phones:
        rows = list(
            db.scalars(
                select(StudentProfile)
                .where(StudentProfile.phone == phone)
                .order_by(desc(StudentProfile.created_at), desc(StudentProfile.id))
            ).all()
        )
        for r in rows[1:]:
            db.delete(r)
            removed += 1
    return removed


def dedupe_profiles_by_phone(db: Session) -> int:
    removed = _dedupe_profiles_by_phone_impl(db)
    if removed:
        db.commit()
    return removed


def migrate_student_phone(db: Session, old_phone: str, new_phone: str) -> None:
    old_phone = old_phone.strip()
    new_phone = new_phone.strip()
    if old_phone == new_phone:
        raise ValueError("新旧手机号不能相同")

    old_stats = db.scalar(select(StudyStats).where(StudyStats.student_phone == old_phone))
    new_stats = db.scalar(select(StudyStats).where(StudyStats.student_phone == new_phone))

    if old_stats and new_stats:
        new_stats.total_questions = max(old_stats.total_questions, new_stats.total_questions)
        new_stats.study_days = max(old_stats.study_days, new_stats.study_days)
        new_stats.essay_count = max(old_stats.essay_count, new_stats.essay_count)
        td, tq = _merge_today(
            new_stats.today_study_date,
            new_stats.today_questions,
            old_stats.today_study_date or "",
            old_stats.today_questions,
        )
        new_stats.today_study_date = td
        new_stats.today_questions = tq
        new_stats.correct_count = _cap_correct(
            new_stats.total_questions, max(old_stats.correct_count, new_stats.correct_count)
        )
        db.delete(old_stats)
    elif old_stats:
        old_stats.student_phone = new_phone

    db.execute(update(FavoritePosition).where(FavoritePosition.student_phone == old_phone).values(student_phone=new_phone))
    db.execute(update(StudentProfile).where(StudentProfile.phone == old_phone).values(phone=new_phone))
    db.flush()
    _dedupe_profiles_by_phone_impl(db)
    db.commit()


def purge_all_data_for_phone(db: Session, phone: str) -> dict[str, int]:
    """删除该手机号下：学员档案、学习统计、收藏岗位（慎用）。"""
    phone = phone.strip()
    r1 = db.execute(delete(StudentProfile).where(StudentProfile.phone == phone))
    r2 = db.execute(delete(StudyStats).where(StudyStats.student_phone == phone))
    r3 = db.execute(delete(FavoritePosition).where(FavoritePosition.student_phone == phone))
    db.commit()
    return {
        "deleted_profiles": int(r1.rowcount or 0),
        "deleted_study_stats_rows": int(r2.rowcount or 0),
        "deleted_favorites": int(r3.rowcount or 0),
    }


def list_student_profiles(
    db: Session, page: int, page_size: int, keyword: str | None = None
) -> tuple[list[StudentProfileItem], int]:
    stmt = select(StudentProfile)
    count_stmt = select(func.count(StudentProfile.id))
    if keyword:
        kw = f"%{keyword}%"
        cond = (
            (StudentProfile.name.ilike(kw))
            | (StudentProfile.phone.ilike(kw))
            | (StudentProfile.major.ilike(kw))
            | (StudentProfile.school.ilike(kw))
        )
        stmt = stmt.where(cond)
        count_stmt = count_stmt.where(cond)

    total = db.scalar(count_stmt) or 0
    rows = db.scalars(
        stmt.order_by(desc(StudentProfile.created_at)).offset((page - 1) * page_size).limit(page_size)
    ).all()
    return [_to_item(row) for row in rows], total


def _to_item(row: StudentProfile) -> StudentProfileItem:
    return StudentProfileItem(
        id=row.id,
        name=row.name,
        phone=row.phone,
        age=row.age,
        gender=row.gender,
        education=row.education,
        school=row.school,
        major=row.major,
        examType=row.exam_type,
        source=row.source,
        createdAt=row.created_at.isoformat() if row.created_at else None,
    )
