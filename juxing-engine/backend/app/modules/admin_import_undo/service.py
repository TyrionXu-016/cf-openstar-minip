from __future__ import annotations

import json

from sqlalchemy import delete, select
from sqlalchemy.orm import Session

from app.db.models import AdminImportUndoBatch, FavoritePosition, Position, Question

RESOURCE_POSITIONS = "positions"
RESOURCE_QUESTIONS = "questions"


def record_import_batch(db: Session, *, resource: str, created_ids: list) -> None:
    if not created_ids:
        return
    db.add(
        AdminImportUndoBatch(
            resource=resource,
            entity_ids_json=json.dumps(created_ids, ensure_ascii=False),
        )
    )


def undo_last_import_batch(db: Session, *, resource: str) -> tuple[int, int, int]:
    """Pop the latest undo batch for ``resource`` and delete those rows if they still exist.

    Returns ``(deleted_count, missing_count, batch_size)``.
    Raises ``ValueError`` when there is no batch to undo.
    """
    row = db.scalars(
        select(AdminImportUndoBatch)
        .where(AdminImportUndoBatch.resource == resource)
        .order_by(AdminImportUndoBatch.id.desc())
        .limit(1)
    ).first()
    if not row:
        raise ValueError("没有可撤销的批量导入记录")

    ids = json.loads(row.entity_ids_json)
    if not isinstance(ids, list):
        ids = []

    db.delete(row)

    deleted = 0
    missing = 0
    if resource == RESOURCE_POSITIONS:
        for raw in ids:
            pid = int(raw)
            pos = db.get(Position, pid)
            if not pos:
                missing += 1
                continue
            db.execute(delete(FavoritePosition).where(FavoritePosition.position_id == pid))
            db.delete(pos)
            deleted += 1
    elif resource == RESOURCE_QUESTIONS:
        for raw in ids:
            qid = str(raw)
            q = db.get(Question, qid)
            if not q:
                missing += 1
                continue
            db.delete(q)
            deleted += 1
    else:
        raise ValueError(f"未知资源类型: {resource}")

    return deleted, missing, len(ids)
