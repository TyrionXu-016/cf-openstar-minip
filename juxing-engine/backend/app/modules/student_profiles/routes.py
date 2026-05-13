from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.api.deps import require_permission
from app.db.session import get_db
from app.modules.student_profiles.schemas import (
    DedupePhonesResult,
    MigratePhoneRequest,
    MigratePhoneResult,
    PurgePhoneRequest,
    StudentProfileCreate,
    StudentProfileItem,
    StudentProfileUpdate,
)
from app.modules.student_profiles.service import (
    create_student_profile,
    dedupe_profiles_by_phone,
    delete_student_profile,
    get_student_profile,
    list_student_profiles,
    migrate_student_phone,
    purge_all_data_for_phone,
    update_student_profile,
)

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


@admin_router.get(
    "/students/{profile_id}",
    dependencies=[Depends(require_permission("role:read"))],
)
def get_student_profile_api(profile_id: int, db: Session = Depends(get_db)) -> dict:
    item = get_student_profile(db, profile_id)
    if not item:
        raise HTTPException(status_code=404, detail="学员档案不存在")
    return {"data": item.model_dump()}


@admin_router.patch(
    "/students/{profile_id}",
    response_model=StudentProfileItem,
    dependencies=[Depends(require_permission("role:write"))],
)
def patch_student_profile_api(
    profile_id: int, payload: StudentProfileUpdate, db: Session = Depends(get_db)
) -> StudentProfileItem:
    try:
        item = update_student_profile(db, profile_id, payload)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    if not item:
        raise HTTPException(status_code=404, detail="学员档案不存在")
    return item


@admin_router.delete(
    "/students/{profile_id}",
    dependencies=[Depends(require_permission("role:write"))],
)
def delete_student_profile_api(profile_id: int, db: Session = Depends(get_db)) -> dict[str, bool]:
    if not delete_student_profile(db, profile_id):
        raise HTTPException(status_code=404, detail="学员档案不存在")
    return {"ok": True}


@admin_router.post(
    "/students/dedupe-phones",
    response_model=DedupePhonesResult,
    dependencies=[Depends(require_permission("role:write"))],
)
def dedupe_student_phones_api(db: Session = Depends(get_db)) -> DedupePhonesResult:
    removed = dedupe_profiles_by_phone(db)
    return DedupePhonesResult(removed_profile_rows=removed)


@admin_router.post(
    "/students/migrate-phone",
    response_model=MigratePhoneResult,
    dependencies=[Depends(require_permission("role:write"))],
)
def migrate_phone_api(payload: MigratePhoneRequest, db: Session = Depends(get_db)) -> MigratePhoneResult:
    try:
        migrate_student_phone(db, payload.old_phone, payload.new_phone)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return MigratePhoneResult(ok=True, message="已迁移：学习统计、收藏与档案中的手机号已合并为新号（档案已去重）。")


@admin_router.post(
    "/students/purge-by-phone",
    dependencies=[Depends(require_permission("role:write"))],
)
def purge_by_phone_api(payload: PurgePhoneRequest, db: Session = Depends(get_db)) -> dict:
    counts = purge_all_data_for_phone(db, payload.phone)
    return {"ok": True, **counts}
