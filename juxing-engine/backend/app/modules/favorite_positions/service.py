import json

from sqlalchemy import delete, desc, select
from sqlalchemy.orm import Session

from app.db.models import FavoritePosition
from app.modules.favorite_positions.schemas import FavoritePositionCreate, FavoritePositionItem


def upsert_favorite(db: Session, payload: FavoritePositionCreate) -> FavoritePositionItem:
    stmt = select(FavoritePosition).where(
        FavoritePosition.student_phone == payload.studentPhone.strip(),
        FavoritePosition.position_id == payload.positionId,
    )
    row = db.scalar(stmt)
    if row:
        row.position_name = payload.positionName.strip()
        row.payload = json.dumps(payload.payload, ensure_ascii=False)
    else:
        row = FavoritePosition(
            student_phone=payload.studentPhone.strip(),
            position_id=payload.positionId,
            position_name=payload.positionName.strip(),
            payload=json.dumps(payload.payload, ensure_ascii=False),
        )
        db.add(row)
    db.commit()
    db.refresh(row)
    return _to_item(row)


def list_favorites(db: Session, student_phone: str, limit: int = 200) -> list[FavoritePositionItem]:
    rows = db.scalars(
        select(FavoritePosition)
        .where(FavoritePosition.student_phone == student_phone.strip())
        .order_by(desc(FavoritePosition.created_at))
        .limit(limit)
    ).all()
    return [_to_item(row) for row in rows]


def remove_favorite(db: Session, student_phone: str, position_id: int) -> bool:
    result = db.execute(
        delete(FavoritePosition).where(
            FavoritePosition.student_phone == student_phone.strip(),
            FavoritePosition.position_id == position_id,
        )
    )
    db.commit()
    return (result.rowcount or 0) > 0


def _to_item(row: FavoritePosition) -> FavoritePositionItem:
    payload = {}
    try:
        payload = json.loads(row.payload) if row.payload else {}
    except Exception:
        payload = {}
    return FavoritePositionItem(
        id=row.id,
        studentPhone=row.student_phone,
        positionId=row.position_id,
        positionName=row.position_name,
        payload=payload,
        createdAt=row.created_at.isoformat() if row.created_at else None,
    )

