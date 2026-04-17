from __future__ import annotations

from typing import Any

from fastapi import APIRouter, BackgroundTasks, Depends
from pydantic import BaseModel

from app.api.deps import require_permission
from app.modules.semantic.service import recommend_positions, reindex_all_positions


class RecommendRequest(BaseModel):
    studentInfo: dict[str, Any]
    topK: int | None = None
    category: str | None = None


class RecommendResponse(BaseModel):
    success: bool
    data: list[dict[str, Any]]
    topK: int


class ReindexRequest(BaseModel):
    forceRecreate: bool = True
    limit: int | None = None


class ReindexResponse(BaseModel):
    started: bool


admin_router = APIRouter()
mini_router = APIRouter()


@mini_router.post("/recommend", response_model=RecommendResponse)
def recommend(payload: RecommendRequest) -> RecommendResponse:
    # endpoint 不做权限控制：小程序公开接口
    data = recommend_positions(
        payload.studentInfo,
        top_k=payload.topK,
        category=payload.category,
    )
    top_k = int(payload.topK or len(data) or 0)
    if payload.topK is not None:
        top_k = payload.topK
    return RecommendResponse(success=True, data=data, topK=top_k)


@admin_router.post(
    "/semantic/reindex",
    response_model=ReindexResponse,
    dependencies=[Depends(require_permission("role:write"))],
)
def reindex(background_tasks: BackgroundTasks, payload: ReindexRequest | None = None) -> ReindexResponse:
    force_recreate = True
    limit = None
    if payload:
        force_recreate = bool(payload.forceRecreate)
        limit = payload.limit

    background_tasks.add_task(reindex_all_positions, force_recreate=force_recreate, limit=limit)
    return ReindexResponse(started=True)

