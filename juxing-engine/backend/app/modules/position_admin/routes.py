from __future__ import annotations

from pathlib import Path

from fastapi import APIRouter, Depends, File, HTTPException, Query, UploadFile
from sqlalchemy.orm import Session

from app.api.deps import require_permission
from app.db.session import get_db
from app.modules.admin_import_undo.schemas import UndoImportResponse
from app.modules.admin_import_undo.service import RESOURCE_POSITIONS, undo_last_import_batch
from app.modules.position_admin.schemas import ImportJsonRequest, ImportResult, PositionInput, PositionItem
from app.modules.position_admin.service import (
    delete_position_by_id,
    get_position,
    import_positions,
    list_positions,
    parse_csv_bytes,
    parse_xlsx_bytes,
    upsert_one,
)

router = APIRouter()


@router.post(
    "/positions",
    response_model=PositionItem,
    dependencies=[Depends(require_permission("role:write"))],
)
def create_position(payload: PositionInput, db: Session = Depends(get_db)) -> PositionItem:
    _, row = upsert_one(db, payload, on_conflict="upsert")
    db.commit()
    db.refresh(row)
    item = get_position(db, row.id)
    if not item:
        raise HTTPException(status_code=500, detail="岗位保存成功但读取失败")
    return item


@router.delete(
    "/positions/{position_id}",
    dependencies=[Depends(require_permission("role:write"))],
)
def delete_position(position_id: int, db: Session = Depends(get_db)) -> dict[str, bool]:
    if not delete_position_by_id(db, position_id):
        raise HTTPException(status_code=404, detail="岗位不存在")
    db.commit()
    return {"ok": True}


@router.post(
    "/positions/import/json",
    response_model=ImportResult,
    dependencies=[Depends(require_permission("role:write"))],
)
def import_position_json(payload: ImportJsonRequest, db: Session = Depends(get_db)) -> ImportResult:
    return import_positions(db, payload.items, on_conflict=payload.on_conflict)


@router.post(
    "/positions/import/file",
    response_model=ImportResult,
    dependencies=[Depends(require_permission("role:write"))],
)
async def import_position_file(
    file: UploadFile = File(...),
    on_conflict: str = Query(default="upsert"),
    db: Session = Depends(get_db),
) -> ImportResult:
    ext = Path(file.filename or "").suffix.lower()
    content = await file.read()
    try:
        if ext == ".csv":
            items = parse_csv_bytes(content)
        elif ext in {".xlsx", ".xlsm"}:
            items = parse_xlsx_bytes(content)
        else:
            raise HTTPException(status_code=400, detail="仅支持 .csv / .xlsx / .xlsm")
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"文件解析失败: {exc}") from exc
    return import_positions(db, items, on_conflict=on_conflict)


@router.post(
    "/positions/import/undo",
    response_model=UndoImportResponse,
    dependencies=[Depends(require_permission("role:write"))],
)
def undo_position_import(db: Session = Depends(get_db)) -> UndoImportResponse:
    try:
        deleted, missing, batch_size = undo_last_import_batch(db, resource=RESOURCE_POSITIONS)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    db.commit()
    return UndoImportResponse(deleted=deleted, missing=missing, batch_size=batch_size)


@router.get(
    "/positions",
    dependencies=[Depends(require_permission("role:read"))],
)
def list_position_api(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=200),
    category: str | None = None,
    keyword: str | None = None,
    db: Session = Depends(get_db),
) -> dict:
    data, total = list_positions(db, page=page, page_size=page_size, category=category, keyword=keyword)
    return {"data": [item.model_dump() for item in data], "total": total, "page": page, "pageSize": page_size}

