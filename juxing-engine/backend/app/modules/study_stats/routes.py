from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.api.deps import require_permission
from app.db.session import get_db
from app.modules.study_stats.schemas import StudyStatsAdminSet, StudyStatsUpsert
from app.modules.study_stats.service import admin_set_stats, get_stats_dict, upsert_merge

mini_router = APIRouter()
admin_router = APIRouter()


@mini_router.get("/study-stats")
def get_study_stats(
    student_phone: str = Query(..., min_length=6, max_length=20),
    db: Session = Depends(get_db),
) -> dict:
    data = get_stats_dict(db, student_phone)
    if not data:
        return {
            "success": True,
            "data": {
                "total": 0,
                "correct": 0,
                "days": 0,
                "essay": 0,
                "todayDate": "",
                "todayQuestions": 0,
            },
        }
    return {"success": True, "data": data}


@mini_router.post("/study-stats")
def post_study_stats(payload: StudyStatsUpsert, db: Session = Depends(get_db)) -> dict:
    data = upsert_merge(db, payload)
    return {"success": True, "data": data}


@admin_router.get(
    "/study-stats",
    dependencies=[Depends(require_permission("role:read"))],
)
def admin_get_study_stats(
    student_phone: str = Query(..., min_length=6, max_length=20),
    db: Session = Depends(get_db),
) -> dict:
    data = get_stats_dict(db, student_phone)
    if not data:
        return {
            "data": {
                "total": 0,
                "correct": 0,
                "days": 0,
                "essay": 0,
                "todayDate": "",
                "todayQuestions": 0,
            }
        }
    return {"data": data}


@admin_router.patch(
    "/study-stats",
    dependencies=[Depends(require_permission("role:write"))],
)
def admin_patch_study_stats(payload: StudyStatsAdminSet, db: Session = Depends(get_db)) -> dict:
    data = admin_set_stats(db, payload)
    return {"data": data}
