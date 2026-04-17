from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.api.deps import require_permission
from app.db.session import get_db
from app.modules.student_profiles.schemas import StudentProfileCreate
from app.modules.student_profiles.service import create_student_profile, list_student_profiles

admin_router = APIRouter()
mini_router = APIRouter()


@mini_router.post("/students")
def create_student_profile_api(
    payload: StudentProfileCreate, db: Session = Depends(get_db)
) -> dict:
    item = create_student_profile(db, payload)
    return {"success": True, "data": item.model_dump()}


@admin_router.get(
    "/students",
    dependencies=[Depends(require_permission("role:read"))],
)
def list_student_profiles_api(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=200),
    keyword: str | None = None,
    db: Session = Depends(get_db),
) -> dict:
    data, total = list_student_profiles(db, page=page, page_size=page_size, keyword=keyword)
    return {"data": [item.model_dump() for item in data], "total": total, "page": page, "pageSize": page_size}

