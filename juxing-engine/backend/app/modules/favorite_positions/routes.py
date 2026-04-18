from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.modules.favorite_positions.schemas import FavoritePositionCreate
from app.modules.favorite_positions.service import list_favorites, remove_favorite, upsert_favorite

mini_router = APIRouter()


@mini_router.post("/favorites")
def save_favorite(payload: FavoritePositionCreate, db: Session = Depends(get_db)) -> dict:
    item = upsert_favorite(db, payload)
    return {"success": True, "data": item.model_dump()}


@mini_router.get("/favorites")
def get_favorites(
    student_phone: str = Query(..., min_length=6, max_length=20),
    limit: int = Query(default=200, ge=1, le=500),
    db: Session = Depends(get_db),
) -> dict:
    data = list_favorites(db, student_phone=student_phone, limit=limit)
    return {"success": True, "data": [item.model_dump() for item in data], "total": len(data)}


@mini_router.delete("/favorites/{position_id}")
def delete_favorite(
    position_id: int,
    student_phone: str = Query(..., min_length=6, max_length=20),
    db: Session = Depends(get_db),
) -> dict:
    ok = remove_favorite(db, student_phone=student_phone, position_id=position_id)
    return {"success": ok}

