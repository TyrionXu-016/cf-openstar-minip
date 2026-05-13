from __future__ import annotations

from pydantic import BaseModel, Field


class QuestionOption(BaseModel):
    key: str = Field(min_length=1, max_length=2)
    text: str = Field(min_length=1)


class QuestionInput(BaseModel):
    id: str = Field(min_length=1, max_length=64)
    category: str = Field(min_length=1, max_length=32)
    subject: str = Field(min_length=1, max_length=64)
    difficulty: str = Field(min_length=1, max_length=16)
    question: str = Field(min_length=1)
    options: list[QuestionOption] = Field(min_length=2, max_length=6)
    answer: str = Field(min_length=1, max_length=16)
    explanation: str = Field(min_length=1)


class QuestionItem(QuestionInput):
    source: str
    created_at: str | None = None
    updated_at: str | None = None


class ImportJsonRequest(BaseModel):
    items: list[QuestionInput]
    on_conflict: str = "upsert"  # upsert | skip


class ImportResult(BaseModel):
    total: int
    created: int
    updated: int
    skipped: int
    errors: list[str] = []
    created_ids: list[str] = Field(default_factory=list)


class RecognizeQuestionsRequest(BaseModel):
    raw_text: str = Field(min_length=1, description="待识别的原始题目文本")
    category: str = Field(default="lx", min_length=1, max_length=32)
    subject: str = Field(default="智能识别", min_length=1, max_length=64)
    difficulty: str = Field(default="中等", min_length=1, max_length=16)


class RecognizeQuestionsResponse(BaseModel):
    items: list[QuestionInput]
    raw_json: str

