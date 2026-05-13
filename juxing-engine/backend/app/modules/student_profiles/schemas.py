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


class StudentProfileUpdate(BaseModel):
    """管理端部分更新；至少提供一个字段。"""

    name: str | None = Field(default=None, min_length=1, max_length=64)
    phone: str | None = Field(default=None, min_length=6, max_length=20)
    age: int | None = Field(default=None, ge=1, le=120)
    gender: str | None = Field(default=None, min_length=1, max_length=16)
    education: str | None = Field(default=None, min_length=1, max_length=32)
    school: str | None = Field(default=None, max_length=128)
    major: str | None = Field(default=None, min_length=1, max_length=128)
    examType: str | None = Field(default=None, min_length=1, max_length=32)


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


class MigratePhoneRequest(BaseModel):
    old_phone: str = Field(min_length=6, max_length=20)
    new_phone: str = Field(min_length=6, max_length=20)


class PurgePhoneRequest(BaseModel):
    phone: str = Field(min_length=6, max_length=20)


class DedupePhonesResult(BaseModel):
    removed_profile_rows: int


class MigratePhoneResult(BaseModel):
    ok: bool
    message: str
