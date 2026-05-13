from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db.models import StudyStats
from app.modules.study_stats.schemas import StudyStatsAdminSet, StudyStatsUpsert


def _cap_correct(total: int, correct: int) -> int:
    return min(max(correct, 0), total)


def _merge_today(
    server_date: str | None,
    server_q: int,
    client_date: str,
    client_q: int,
) -> tuple[str | None, int]:
    sd = (server_date or "").strip()
    cd = (client_date or "").strip()
    if not cd:
        return sd or None, server_q
    if not sd:
        return cd, client_q
    if cd == sd:
        return sd, max(server_q, client_q)
    if cd > sd:
        return cd, client_q
    return sd, server_q


def get_stats_dict(db: Session, student_phone: str) -> dict | None:
    row = db.scalar(select(StudyStats).where(StudyStats.student_phone == student_phone.strip()))
    if not row:
        return None
    return {
        "total": row.total_questions,
        "correct": row.correct_count,
        "days": row.study_days,
        "essay": row.essay_count,
        "todayDate": row.today_study_date or "",
        "todayQuestions": row.today_questions,
    }


def upsert_merge(db: Session, payload: StudyStatsUpsert) -> dict:
    phone = payload.student_phone.strip()
    stmt = select(StudyStats).where(StudyStats.student_phone == phone)
    row = db.scalar(stmt)

    c_total = payload.total
    c_correct = _cap_correct(c_total, payload.correct)
    c_days = payload.days
    c_essay = payload.essay
    c_td = (payload.today_date or "").strip()[:10]
    c_tq = payload.today_questions

    if not row:
        td, tq = _merge_today(None, 0, c_td, c_tq)
        row = StudyStats(
            student_phone=phone,
            total_questions=c_total,
            correct_count=c_correct,
            study_days=c_days,
            essay_count=c_essay,
            today_study_date=td,
            today_questions=tq,
        )
        db.add(row)
    else:
        row.total_questions = max(row.total_questions, c_total)
        row.correct_count = max(row.correct_count, c_correct)
        row.study_days = max(row.study_days, c_days)
        row.essay_count = max(row.essay_count, c_essay)

        td, tq = _merge_today(row.today_study_date, row.today_questions, c_td, c_tq)
        row.today_study_date = td
        row.today_questions = tq
        row.correct_count = _cap_correct(row.total_questions, row.correct_count)

    db.commit()
    db.refresh(row)
    return {
        "total": row.total_questions,
        "correct": row.correct_count,
        "days": row.study_days,
        "essay": row.essay_count,
        "todayDate": row.today_study_date or "",
        "todayQuestions": row.today_questions,
    }


def admin_set_stats(db: Session, payload: StudyStatsAdminSet) -> dict:
    """管理端按给定数值覆盖该行（不存在则创建）。"""
    phone = payload.student_phone.strip()
    row = db.scalar(select(StudyStats).where(StudyStats.student_phone == phone))
    total = payload.total
    correct = _cap_correct(total, payload.correct)
    days = payload.days
    essay = payload.essay
    td = (payload.today_date or "").strip()[:10] or None
    tq = payload.today_questions

    if not row:
        row = StudyStats(
            student_phone=phone,
            total_questions=total,
            correct_count=correct,
            study_days=days,
            essay_count=essay,
            today_study_date=td,
            today_questions=tq,
        )
        db.add(row)
    else:
        row.total_questions = total
        row.correct_count = correct
        row.study_days = days
        row.essay_count = essay
        row.today_study_date = td
        row.today_questions = tq

    db.commit()
    db.refresh(row)
    return {
        "total": row.total_questions,
        "correct": row.correct_count,
        "days": row.study_days,
        "essay": row.essay_count,
        "todayDate": row.today_study_date or "",
        "todayQuestions": row.today_questions,
    }
