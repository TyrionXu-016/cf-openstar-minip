import json

from fastapi import APIRouter, Query, Depends
from sqlalchemy import func, or_, select
from sqlalchemy.orm import Session

from app.db.models import Position
from app.db.session import get_db

router = APIRouter()


@router.get("/positions")
def get_positions(
    category: str | None = Query(default=None),
    is_three_free: bool = Query(default=False),
    keyword: str | None = Query(default=None),
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=100, ge=1, le=2000),
    db: Session = Depends(get_db),
) -> dict:
    stmt = select(Position)
    count_stmt = select(func.count(Position.id))

    filters = []
    if category and category != "全部":
        filters.append(Position.category == category)
    if is_three_free:
        filters.append(Position.is_three_free.is_(True))
    if keyword:
        filters.append(
            or_(
                Position.name.ilike(f"%{keyword}%"),
                Position.sub_category.ilike(f"%{keyword}%"),
            )
        )

    if filters:
        stmt = stmt.where(*filters)
        count_stmt = count_stmt.where(*filters)

    total = db.scalar(count_stmt) or 0
    rows = db.scalars(stmt.offset((page - 1) * page_size).limit(page_size)).all()

    data: list[dict] = []
    for item in rows:
        try:
            obj = json.loads(item.payload)
        except Exception:
            # fallback: 至少返回基础字段
            obj = {
                "id": item.id,
                "name": item.name,
                "category": item.category,
                "subCategory": item.sub_category,
                "description": item.description,
                "isThreeFree": item.is_three_free,
            }
        # 确保字段一致（万一 payload 缺失）
        obj["id"] = item.id
        obj["name"] = item.name
        obj["category"] = item.category
        obj["subCategory"] = item.sub_category
        obj["description"] = item.description
        obj["isThreeFree"] = item.is_three_free
        data.append(obj)
    return {"success": True, "data": data, "total": total, "page": page, "pageSize": page_size}
