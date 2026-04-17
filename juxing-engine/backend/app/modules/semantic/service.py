from __future__ import annotations

import json
from typing import Any, Iterable

from qdrant_client import QdrantClient
from qdrant_client.models import (
    Distance,
    FieldCondition,
    Filter,
    MatchValue,
    PointStruct,
    VectorParams,
)
from sentence_transformers import SentenceTransformer
from sqlalchemy import select

from app.core.config import settings
from app.db.models import Position
from app.db.session import SessionLocal

_model: SentenceTransformer | None = None


def get_model() -> SentenceTransformer:
    global _model
    if _model is None:
        _model = SentenceTransformer(settings.EMBEDDING_MODEL_NAME)
    return _model


def _safe_json_loads(text: str) -> dict[str, Any] | None:
    try:
        return json.loads(text)
    except Exception:
        return None


def build_student_text(student_info: dict[str, Any]) -> str:
    major = str(student_info.get("major") or "").strip()
    education = str(student_info.get("education") or "").strip()
    gender = str(student_info.get("gender") or "").strip()
    exam_type = str(student_info.get("examType") or student_info.get("exam_type") or "").strip()

    # embedding 输入尽量“短而信息密”
    return f"考试类型:{exam_type} 专业:{major} 学历:{education} 性别:{gender}"


def build_position_text(payload: dict[str, Any]) -> str:
    name = str(payload.get("name") or "").strip()
    category = str(payload.get("category") or "").strip()
    sub_category = str(payload.get("subCategory") or payload.get("sub_category") or "").strip()
    difficulty = str(payload.get("difficulty") or "").strip()
    tags = payload.get("tags") or []
    if isinstance(tags, list):
        tags_text = " ".join([str(t) for t in tags if t])
    else:
        tags_text = str(tags)

    description = str(payload.get("description") or "").strip()
    work = str(payload.get("work") or "").strip()
    promotion = str(payload.get("promotion") or "").strip()

    req = payload.get("requirements") or {}
    majors = req.get("majors") or []
    if isinstance(majors, list):
        majors_text = " ".join([str(m) for m in majors if m])
    else:
        majors_text = str(majors)

    edu = req.get("education") or req.get("edu") or ""

    if isinstance(edu, list):
        edu_text = " ".join([str(e) for e in edu if e])
    else:
        edu_text = str(edu)

    return "\n".join(
        [
            f"岗位:{name}",
            f"分类:{category} {sub_category}",
            f"难度:{difficulty}",
            f"标签:{tags_text}",
            f"描述:{description}",
            f"工作内容:{work}",
            f"晋升:{promotion}",
            f"专业要求:{majors_text}",
            f"学历要求:{edu_text}",
        ]
    )


def _get_client() -> QdrantClient:
    return QdrantClient(host=settings.QDRANT_HOST, port=settings.QDRANT_PORT)


def _ensure_collection(vector_size: int, force_recreate: bool) -> None:
    client = _get_client()
    if force_recreate:
        client.recreate_collection(
            collection_name=settings.QDRANT_COLLECTION,
            vectors_config=VectorParams(size=vector_size, distance=Distance.COSINE),
        )
        return

    # collection 存在则复用；不存在则创建
    try:
        client.get_collection(collection_name=settings.QDRANT_COLLECTION)
    except Exception:
        client.create_collection(
            collection_name=settings.QDRANT_COLLECTION,
            vectors_config=VectorParams(size=vector_size, distance=Distance.COSINE),
        )


def reindex_all_positions(*, force_recreate: bool = True, limit: int | None = None) -> int:
    """
    从 SQLite 读取 positions，构建 embedding，upsert 到 Qdrant。
    返回写入的向量数量（position 数量）。
    """

    model = get_model()
    # 计算向量维度（避免硬编码）
    dummy_vec = model.encode("测试向量维度", normalize_embeddings=True)
    vector_size = int(getattr(dummy_vec, "shape", [len(dummy_vec)])[0] or len(dummy_vec))

    _ensure_collection(vector_size=vector_size, force_recreate=force_recreate)
    client = _get_client()

    with SessionLocal() as db:
        stmt = select(Position.id, Position.payload).order_by(Position.id)
        if limit is not None:
            stmt = stmt.limit(limit)
        rows = db.execute(stmt).all()

    upsert_batch_size = int(settings.SEMANTIC_UPSERT_BATCH_SIZE)
    indexed = 0

    for i in range(0, len(rows), upsert_batch_size):
        batch = rows[i : i + upsert_batch_size]
        ids: list[int] = []
        texts: list[str] = []
        categories: list[str] = []

        for pos_id, payload_text in batch:
            obj = _safe_json_loads(payload_text) or {}
            category = str(obj.get("category") or obj.get("examType") or "").strip()
            if not category:
                # fallback：如果 payload 缺失 category，就用表字段 category（如果你后续补齐结构化字段）
                category = "未知"
            ids.append(int(pos_id))
            categories.append(category)
            texts.append(build_position_text(obj))

        vectors = model.encode(texts, normalize_embeddings=True)
        points: list[PointStruct] = []
        for pos_id, category, vector in zip(ids, categories, vectors):
            points.append(PointStruct(id=pos_id, vector=vector.tolist(), payload={"category": category}))

        client.upsert(collection_name=settings.QDRANT_COLLECTION, points=points)
        indexed += len(points)

    return indexed


def recommend_positions(student_info: dict[str, Any], *, top_k: int | None = None, category: str | None = None) -> list[dict[str, Any]]:
    model = get_model()
    top_k = int(top_k or settings.VECTOR_TOPK_DEFAULT)

    # embedding
    vector = model.encode(build_student_text(student_info), normalize_embeddings=True)

    client = _get_client()
    query_filter = None
    if category:
        query_filter = Filter(must=[FieldCondition(key="category", match=MatchValue(value=category))])

    # qdrant-client v1.x 用 query_points 做向量检索
    results = client.query_points(
        collection_name=settings.QDRANT_COLLECTION,
        query=vector.tolist(),
        limit=top_k,
        query_filter=query_filter,
        with_payload=False,
    )

    ids = [int(p.id) for p in results.points]
    if not ids:
        return []

    with SessionLocal() as db:
        rows = db.execute(select(Position.id, Position.payload).where(Position.id.in_(ids))).all()

    by_id: dict[int, str] = {int(pos_id): payload_text for pos_id, payload_text in rows}

    candidates: list[dict[str, Any]] = []
    for pos_id in ids:
        payload_text = by_id.get(pos_id)
        obj = _safe_json_loads(payload_text) if payload_text else None
        if not obj:
            continue
        # 补齐你小程序 calculateMatches 依赖的基础字段
        obj["id"] = pos_id
        candidates.append(obj)

    return candidates

