from sqlalchemy import desc, func, select
from sqlalchemy.orm import Session

from app.db.models import StudentProfile
from app.modules.student_profiles.schemas import StudentProfileCreate, StudentProfileItem


def create_student_profile(db: Session, payload: StudentProfileCreate) -> StudentProfileItem:
    row = StudentProfile(
        name=payload.name.strip(),
        phone=payload.phone.strip(),
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


def list_student_profiles(
    db: Session, page: int, page_size: int, keyword: str | None = None
) -> tuple[list[StudentProfileItem], int]:
    stmt = select(StudentProfile)
    count_stmt = select(func.count(StudentProfile.id))
    if keyword:
        kw = f"%{keyword}%"
        stmt = stmt.where(
            (StudentProfile.name.ilike(kw))
            | (StudentProfile.phone.ilike(kw))
            | (StudentProfile.major.ilike(kw))
            | (StudentProfile.school.ilike(kw))
        )
        count_stmt = count_stmt.where(
            (StudentProfile.name.ilike(kw))
            | (StudentProfile.phone.ilike(kw))
            | (StudentProfile.major.ilike(kw))
            | (StudentProfile.school.ilike(kw))
        )

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

