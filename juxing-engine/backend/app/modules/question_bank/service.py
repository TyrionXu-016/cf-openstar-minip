from __future__ import annotations

import csv
import io
import json
from typing import Iterable

import httpx
from openpyxl import load_workbook
from sqlalchemy import or_, select
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.models import Question
from app.modules.admin_import_undo.service import RESOURCE_QUESTIONS, record_import_batch
from app.modules.question_bank.schemas import ImportResult, QuestionInput, QuestionItem, QuestionOption


def _validate_options_answer(options: list[QuestionOption], answer: str) -> None:
    keys = {item.key for item in options}
    if answer not in keys:
        raise ValueError(f"answer={answer} 不在 options key 集合中")


def _to_item(row: Question) -> QuestionItem:
    options = [QuestionOption(**item) for item in json.loads(row.options_json)]
    return QuestionItem(
        id=row.id,
        category=row.category,
        subject=row.subject,
        difficulty=row.difficulty,
        question=row.question,
        options=options,
        answer=row.answer,
        explanation=row.explanation,
        source=row.source,
        created_at=row.created_at.isoformat() if row.created_at else None,
        updated_at=row.updated_at.isoformat() if row.updated_at else None,
    )


def upsert_one(db: Session, payload: QuestionInput, source: str, on_conflict: str = "upsert") -> tuple[str, Question]:
    _validate_options_answer(payload.options, payload.answer)
    existing = db.get(Question, payload.id)

    if existing and on_conflict == "skip":
        return "skipped", existing

    options_json = json.dumps([item.model_dump() for item in payload.options], ensure_ascii=False)
    if existing:
        existing.category = payload.category
        existing.subject = payload.subject
        existing.difficulty = payload.difficulty
        existing.question = payload.question
        existing.options_json = options_json
        existing.answer = payload.answer
        existing.explanation = payload.explanation
        existing.source = source
        db.flush()
        return "updated", existing

    row = Question(
        id=payload.id,
        category=payload.category,
        subject=payload.subject,
        difficulty=payload.difficulty,
        question=payload.question,
        options_json=options_json,
        answer=payload.answer,
        explanation=payload.explanation,
        source=source,
    )
    db.add(row)
    db.flush()
    return "created", row


def import_questions(db: Session, items: Iterable[QuestionInput], *, source: str, on_conflict: str = "upsert") -> ImportResult:
    created = 0
    updated = 0
    skipped = 0
    errors: list[str] = []
    count = 0
    created_ids: list[str] = []

    for idx, item in enumerate(items, start=1):
        count += 1
        try:
            action, row = upsert_one(db, item, source=source, on_conflict=on_conflict)
            if action == "created":
                created += 1
                created_ids.append(row.id)
            elif action == "updated":
                updated += 1
            else:
                skipped += 1
        except Exception as exc:
            errors.append(f"第 {idx} 条导入失败: {exc}")

    record_import_batch(db, resource=RESOURCE_QUESTIONS, created_ids=created_ids)
    db.commit()
    return ImportResult(
        total=count,
        created=created,
        updated=updated,
        skipped=skipped,
        errors=errors,
        created_ids=created_ids,
    )


def _row_to_input_from_tabular(row: dict[str, str]) -> QuestionInput:
    required_cols = ["id", "category", "subject", "difficulty", "question", "optionA", "optionB", "answer", "explanation"]
    missing = [key for key in required_cols if not str(row.get(key, "")).strip()]
    if missing:
        raise ValueError(f"缺少必填列: {', '.join(missing)}")

    options: list[QuestionOption] = []
    for key in ["A", "B", "C", "D", "E", "F"]:
        val = str(row.get(f"option{key}", "")).strip()
        if val:
            options.append(QuestionOption(key=key, text=val))

    return QuestionInput(
        id=str(row["id"]).strip(),
        category=str(row["category"]).strip(),
        subject=str(row["subject"]).strip(),
        difficulty=str(row["difficulty"]).strip(),
        question=str(row["question"]).strip(),
        options=options,
        answer=str(row["answer"]).strip(),
        explanation=str(row["explanation"]).strip(),
    )


def parse_csv_bytes(content: bytes) -> list[QuestionInput]:
    text = content.decode("utf-8-sig")
    reader = csv.DictReader(io.StringIO(text))
    items: list[QuestionInput] = []
    for line_no, row in enumerate(reader, start=2):
        try:
            items.append(_row_to_input_from_tabular(row))
        except Exception as exc:
            raise ValueError(f"CSV 第 {line_no} 行: {exc}") from exc
    return items


def parse_xlsx_bytes(content: bytes) -> list[QuestionInput]:
    workbook = load_workbook(io.BytesIO(content), read_only=True)
    sheet = workbook.active
    rows = list(sheet.rows)
    if not rows:
        return []
    headers = [str(cell.value).strip() if cell.value is not None else "" for cell in rows[0]]
    items: list[QuestionInput] = []
    for idx, line in enumerate(rows[1:], start=2):
        row_map: dict[str, str] = {}
        for i, cell in enumerate(line):
            if i < len(headers) and headers[i]:
                row_map[headers[i]] = "" if cell.value is None else str(cell.value)
        if not any(str(v).strip() for v in row_map.values()):
            continue
        try:
            items.append(_row_to_input_from_tabular(row_map))
        except Exception as exc:
            raise ValueError(f"XLSX 第 {idx} 行: {exc}") from exc
    return items


def list_questions(
    db: Session,
    *,
    page: int,
    page_size: int,
    category: str | None,
    subject: str | None,
    difficulty: str | None,
    keyword: str | None,
) -> tuple[list[QuestionItem], int]:
    stmt = select(Question)
    count_stmt = select(Question.id)

    filters = []
    if category:
        filters.append(Question.category == category)
    if subject:
        filters.append(Question.subject == subject)
    if difficulty:
        filters.append(Question.difficulty == difficulty)
    if keyword:
        filters.append(
            or_(
                Question.question.ilike(f"%{keyword}%"),
                Question.explanation.ilike(f"%{keyword}%"),
            )
        )

    if filters:
        stmt = stmt.where(*filters)
        count_stmt = count_stmt.where(*filters)

    rows = db.scalars(stmt.order_by(Question.updated_at.desc()).offset((page - 1) * page_size).limit(page_size)).all()
    total = len(db.scalars(count_stmt).all())
    return [_to_item(item) for item in rows], total


def get_question(db: Session, question_id: str) -> QuestionItem | None:
    row = db.get(Question, question_id)
    if not row:
        return None
    return _to_item(row)


def delete_question_by_id(db: Session, question_id: str) -> bool:
    row = db.get(Question, question_id)
    if not row:
        return False
    db.delete(row)
    return True


def recognize_questions_by_llm(
    raw_text: str, *, category: str, subject: str, difficulty: str
) -> tuple[list[QuestionInput], str]:
    if not settings.LLM_API_KEY:
        raise ValueError("LLM_API_KEY 未配置，请先在 backend/.env 中填写")

    system_prompt = (
        "你是题库结构化助手。请把用户输入的题目文本整理为 JSON 数组。"
        "只返回 JSON，不要 markdown，不要解释。"
        "数组每个元素字段固定为：id,category,subject,difficulty,question,options,answer,explanation。"
        "options 必须是数组，元素为 {\"key\":\"A\",\"text\":\"...\"}。"
        "如果原文缺字段："
        "category 使用用户给定值，subject 使用用户给定值，difficulty 使用用户给定值，"
        "id 生成唯一值（如 ai_时间戳_序号），explanation 可简短总结。"
    )
    user_prompt = (
        f"默认 category={category}，subject={subject}，difficulty={difficulty}。\n"
        f"待识别文本如下：\n{raw_text}"
    )

    payload = {
        "model": settings.LLM_MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        "temperature": 0.2,
    }

    base = settings.LLM_BASE_URL.rstrip("/")
    url = f"{base}/chat/completions"
    headers = {"Authorization": f"Bearer {settings.LLM_API_KEY}", "Content-Type": "application/json"}

    with httpx.Client(timeout=settings.LLM_TIMEOUT_SECONDS) as client:
        resp = client.post(url, headers=headers, json=payload)
        resp.raise_for_status()
        data = resp.json()

    content = (
        data.get("choices", [{}])[0]
        .get("message", {})
        .get("content", "")
    )
    cleaned = _extract_json_text(content)
    parsed = json.loads(cleaned)
    if not isinstance(parsed, list):
        raise ValueError("模型返回格式错误：必须是 JSON 数组")

    items: list[QuestionInput] = []
    for idx, row in enumerate(parsed):
        if not isinstance(row, dict):
            raise ValueError(f"第 {idx + 1} 条不是 JSON 对象")
        items.append(QuestionInput.model_validate(row))
    return items, json.dumps([item.model_dump() for item in items], ensure_ascii=False, indent=2)


def _extract_json_text(content: str) -> str:
    text = content.strip()
    if text.startswith("```"):
        lines = text.splitlines()
        if lines and lines[0].startswith("```"):
            lines = lines[1:]
        if lines and lines[-1].startswith("```"):
            lines = lines[:-1]
        text = "\n".join(lines).strip()
    start = text.find("[")
    end = text.rfind("]")
    if start != -1 and end != -1 and end > start:
        return text[start : end + 1]
    return text

