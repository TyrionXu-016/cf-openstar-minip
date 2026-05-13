from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Table, Text, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.session import Base

user_roles = Table(
    "user_roles",
    Base.metadata,
    Column("user_id", ForeignKey("users.id", ondelete="CASCADE"), primary_key=True),
    Column("role_id", ForeignKey("roles.id", ondelete="CASCADE"), primary_key=True),
)

role_permissions = Table(
    "role_permissions",
    Base.metadata,
    Column("role_id", ForeignKey("roles.id", ondelete="CASCADE"), primary_key=True),
    Column("permission_id", ForeignKey("permissions.id", ondelete="CASCADE"), primary_key=True),
)


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    username: Mapped[str] = mapped_column(String(80), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    display_name: Mapped[str] = mapped_column(String(120))
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now())
    updated_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now(), onupdate=func.now())
    roles = relationship("Role", secondary=user_roles, back_populates="users")


class Role(Base):
    __tablename__ = "roles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(80), unique=True, index=True)
    code: Mapped[str] = mapped_column(String(80), unique=True, index=True)
    description: Mapped[str | None] = mapped_column(String(255), nullable=True)
    users = relationship("User", secondary=user_roles, back_populates="roles")
    permissions = relationship("Permission", secondary=role_permissions, back_populates="roles")


class Permission(Base):
    __tablename__ = "permissions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(100), unique=True)
    code: Mapped[str] = mapped_column(String(100), unique=True)
    description: Mapped[str | None] = mapped_column(String(255), nullable=True)
    roles = relationship("Role", secondary=role_permissions, back_populates="permissions")


class Position(Base):
    __tablename__ = "positions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(255), index=True)
    category: Mapped[str] = mapped_column(String(20), index=True)
    sub_category: Mapped[str | None] = mapped_column(String(255), nullable=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    is_three_free: Mapped[bool] = mapped_column(Boolean, default=False)
    # 为了兼容你现有小程序算法对 fields（requirements/tags/difficulty 等）的依赖，
    # 直接把原始对象作为 JSON payload 存储并在 API 里原样返回。
    payload: Mapped[str | None] = mapped_column(Text, nullable=True)


class Question(Base):
    __tablename__ = "questions"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    category: Mapped[str] = mapped_column(String(32), index=True)
    subject: Mapped[str] = mapped_column(String(64), index=True)
    difficulty: Mapped[str] = mapped_column(String(16), index=True)
    question: Mapped[str] = mapped_column(Text)
    options_json: Mapped[str] = mapped_column(Text)
    answer: Mapped[str] = mapped_column(String(16))
    explanation: Mapped[str] = mapped_column(Text)
    source: Mapped[str] = mapped_column(String(16), default="manual")
    created_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now())
    updated_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now(), onupdate=func.now())


class StudentProfile(Base):
    __tablename__ = "student_profiles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(64), index=True)
    phone: Mapped[str] = mapped_column(String(20), index=True)
    age: Mapped[int] = mapped_column(Integer)
    gender: Mapped[str] = mapped_column(String(16))
    education: Mapped[str] = mapped_column(String(32))
    school: Mapped[str | None] = mapped_column(String(128), nullable=True)
    major: Mapped[str] = mapped_column(String(128), index=True)
    exam_type: Mapped[str] = mapped_column(String(32), index=True)
    source: Mapped[str] = mapped_column(String(16), default="mini")
    created_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now(), index=True)


class FavoritePosition(Base):
    __tablename__ = "favorite_positions"
    __table_args__ = (UniqueConstraint("student_phone", "position_id", name="uq_favorite_phone_position"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    student_phone: Mapped[str] = mapped_column(String(20), index=True)
    position_id: Mapped[int] = mapped_column(Integer, index=True)
    position_name: Mapped[str] = mapped_column(String(255))
    payload: Mapped[str] = mapped_column(Text)
    created_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now(), index=True)


class StudyStats(Base):
    """小程序学习概览（按手机号），与本地 study_total / study_YYYY-MM-DD 对齐。"""

    __tablename__ = "study_stats"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    student_phone: Mapped[str] = mapped_column(String(20), unique=True, index=True)
    total_questions: Mapped[int] = mapped_column(Integer, default=0)
    correct_count: Mapped[int] = mapped_column(Integer, default=0)
    study_days: Mapped[int] = mapped_column(Integer, default=0)
    essay_count: Mapped[int] = mapped_column(Integer, default=0)
    today_study_date: Mapped[str | None] = mapped_column(String(10), nullable=True)
    today_questions: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now())
    updated_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now(), onupdate=func.now())


class AdminImportUndoBatch(Base):
    """记录管理端批量导入时「新建」的实体 ID，用于按批次撤销（后进先出）。"""

    __tablename__ = "admin_import_undo_batches"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    resource: Mapped[str] = mapped_column(String(32), index=True)
    entity_ids_json: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[DateTime] = mapped_column(DateTime, server_default=func.now())
