from __future__ import annotations

import json
from pathlib import Path

from fastapi import APIRouter, Depends, File, HTTPException, Query, UploadFile
from sqlalchemy.orm import Session

from app.api.deps import require_permission
from app.db.session import get_db
from app.modules.admin_import_undo.schemas import UndoImportResponse
from app.modules.admin_import_undo.service import RESOURCE_QUESTIONS, undo_last_import_batch
from app.modules.question_bank.schemas import (
    ImportJsonRequest,
    ImportResult,
    RecognizeQuestionsRequest,
    RecognizeQuestionsResponse,
    QuestionInput,
    QuestionItem,
)
from app.modules.question_bank.service import (
    delete_question_by_id,
    get_question,
    import_questions,
    list_questions,
    parse_csv_bytes,
    parse_xlsx_bytes,
    recognize_questions_by_llm,
    upsert_one,
)

admin_router = APIRouter()
mini_router = APIRouter()


@admin_router.post(
    "/questions",
    response_model=QuestionItem,
    dependencies=[Depends(require_permission("role:write"))],
)
def create_question(payload: QuestionInput, db: Session = Depends(get_db)) -> QuestionItem:
    _, row = upsert_one(db, payload, source="manual", on_conflict="upsert")
    db.commit()
    db.refresh(row)
    return QuestionItem(
        id=row.id,
        category=row.category,
        subject=row.subject,
        difficulty=row.difficulty,
        question=row.question,
        options=json.loads(row.options_json),
        answer=row.answer,
        explanation=row.explanation,
        source=row.source,
        created_at=row.created_at.isoformat() if row.created_at else None,
        updated_at=row.updated_at.isoformat() if row.updated_at else None,
    )


@admin_router.post(
    "/questions/import/json",
    response_model=ImportResult,
    dependencies=[Depends(require_permission("role:write"))],
)
def import_json(payload: ImportJsonRequest, db: Session = Depends(get_db)) -> ImportResult:
    return import_questions(db, payload.items, source="json", on_conflict=payload.on_conflict)


@admin_router.post(
    "/questions/recognize",
    response_model=RecognizeQuestionsResponse,
    dependencies=[Depends(require_permission("role:write"))],
)
def recognize_questions(payload: RecognizeQuestionsRequest) -> RecognizeQuestionsResponse:
    try:
        items, raw_json = recognize_questions_by_llm(
            payload.raw_text,
            category=payload.category,
            subject=payload.subject,
            difficulty=payload.difficulty,
        )
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"智能识别失败: {exc}") from exc
    return RecognizeQuestionsResponse(items=items, raw_json=raw_json)


@admin_router.post(
    "/questions/import/file",
    response_model=ImportResult,
    dependencies=[Depends(require_permission("role:write"))],
)
async def import_file(
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
    return import_questions(db, items, source="excel" if ext != ".csv" else "csv", on_conflict=on_conflict)


@admin_router.post(
    "/questions/import/undo",
    response_model=UndoImportResponse,
    dependencies=[Depends(require_permission("role:write"))],
)
def undo_question_import(db: Session = Depends(get_db)) -> UndoImportResponse:
    try:
        deleted, missing, batch_size = undo_last_import_batch(db, resource=RESOURCE_QUESTIONS)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    db.commit()
    return UndoImportResponse(deleted=deleted, missing=missing, batch_size=batch_size)


@admin_router.get(
    "/questions",
    dependencies=[Depends(require_permission("role:read"))],
)
def list_questions_api(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=20, ge=1, le=200),
    category: str | None = None,
    subject: str | None = None,
    difficulty: str | None = None,
    keyword: str | None = None,
    db: Session = Depends(get_db),
) -> dict:
    data, total = list_questions(
        db,
        page=page,
        page_size=page_size,
        category=category,
        subject=subject,
        difficulty=difficulty,
        keyword=keyword,
    )
    return {"data": [item.model_dump() for item in data], "total": total, "page": page, "pageSize": page_size}


@admin_router.get(
    "/questions/{question_id}",
    response_model=QuestionItem,
    dependencies=[Depends(require_permission("role:read"))],
)
def get_question_api(question_id: str, db: Session = Depends(get_db)) -> QuestionItem:
    item = get_question(db, question_id)
    if not item:
        raise HTTPException(status_code=404, detail="题目不存在")
    return item


@admin_router.delete(
    "/questions/{question_id}",
    dependencies=[Depends(require_permission("role:write"))],
)
def delete_question(question_id: str, db: Session = Depends(get_db)) -> dict[str, bool]:
    if not delete_question_by_id(db, question_id):
        raise HTTPException(status_code=404, detail="题目不存在")
    db.commit()
    return {"ok": True}


@mini_router.get("/questions")
def mini_questions(
    category: str | None = None,
    limit: int = Query(default=20, ge=1, le=100),
    db: Session = Depends(get_db),
) -> dict:
    data, total = list_questions(
        db,
        page=1,
        page_size=limit,
        category=category,
        subject=None,
        difficulty=None,
        keyword=None,
    )
    return {"success": True, "data": [item.model_dump() for item in data], "total": total}

