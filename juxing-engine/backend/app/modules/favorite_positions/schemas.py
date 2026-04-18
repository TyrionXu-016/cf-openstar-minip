from pydantic import BaseModel, Field


class FavoritePositionCreate(BaseModel):
    studentPhone: str = Field(min_length=6, max_length=20)
    positionId: int
    positionName: str = Field(min_length=1, max_length=255)
    payload: dict


class FavoritePositionItem(BaseModel):
    id: int
    studentPhone: str
    positionId: int
    positionName: str
    payload: dict
    createdAt: str | None = None

