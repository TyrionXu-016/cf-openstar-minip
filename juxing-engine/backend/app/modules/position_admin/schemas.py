from pydantic import BaseModel, Field


class PositionInput(BaseModel):
    id: int
    name: str = Field(min_length=1, max_length=255)
    category: str = Field(default="国考", min_length=1, max_length=20)
    subCategory: str | None = Field(default=None, max_length=255)
    description: str | None = None
    isThreeFree: bool = False
    payload: dict | None = None


class ImportJsonRequest(BaseModel):
    items: list[PositionInput]
    on_conflict: str = "upsert"


class PositionItem(BaseModel):
    id: int
    name: str
    category: str
    subCategory: str | None = None
    description: str | None = None
    isThreeFree: bool
    payload: dict


class ImportResult(BaseModel):
    total: int
    created: int
    updated: int
    skipped: int
    errors: list[str]
    created_ids: list[int] = Field(default_factory=list)

