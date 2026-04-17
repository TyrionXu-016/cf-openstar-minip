from pydantic import BaseModel, Field


class StudentProfileCreate(BaseModel):
    name: str = Field(min_length=1, max_length=64)
    phone: str = Field(min_length=6, max_length=20)
    age: int = Field(ge=1, le=120)
    gender: str = Field(min_length=1, max_length=16)
    education: str = Field(min_length=1, max_length=32)
    school: str | None = Field(default=None, max_length=128)
    major: str = Field(min_length=1, max_length=128)
    examType: str = Field(min_length=1, max_length=32)


class StudentProfileItem(BaseModel):
    id: int
    name: str
    phone: str
    age: int
    gender: str
    education: str
    school: str | None = None
    major: str
    examType: str
    source: str
    createdAt: str | None = None

