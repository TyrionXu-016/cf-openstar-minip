from pydantic import AliasChoices, BaseModel, ConfigDict, Field


class StudyStatsUpsert(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    student_phone: str = Field(
        ...,
        min_length=6,
        max_length=20,
        validation_alias=AliasChoices("studentPhone", "student_phone"),
    )
    total: int = Field(default=0, ge=0)
    correct: int = Field(default=0, ge=0)
    days: int = Field(default=0, ge=0)
    essay: int = Field(default=0, ge=0)
    today_date: str = Field(
        default="",
        max_length=10,
        validation_alias=AliasChoices("todayDate", "today_date"),
    )
    today_questions: int = Field(
        default=0,
        ge=0,
        validation_alias=AliasChoices("todayQuestions", "today_questions"),
    )
