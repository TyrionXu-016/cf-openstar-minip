"""add student profiles table

Revision ID: 0004_add_student_profiles_table
Revises: 0003_add_questions_table
Create Date: 2026-04-16
"""

from alembic import op
import sqlalchemy as sa

revision = "0004_add_student_profiles_table"
down_revision = "0003_add_questions_table"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "student_profiles",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("name", sa.String(length=64), nullable=False),
        sa.Column("phone", sa.String(length=20), nullable=False),
        sa.Column("age", sa.Integer(), nullable=False),
        sa.Column("gender", sa.String(length=16), nullable=False),
        sa.Column("education", sa.String(length=32), nullable=False),
        sa.Column("school", sa.String(length=128), nullable=True),
        sa.Column("major", sa.String(length=128), nullable=False),
        sa.Column("exam_type", sa.String(length=32), nullable=False),
        sa.Column("source", sa.String(length=16), nullable=False, server_default="mini"),
        sa.Column("created_at", sa.DateTime(), server_default=sa.func.now()),
    )
    op.create_index("ix_student_profiles_name", "student_profiles", ["name"])
    op.create_index("ix_student_profiles_phone", "student_profiles", ["phone"])
    op.create_index("ix_student_profiles_major", "student_profiles", ["major"])
    op.create_index("ix_student_profiles_exam_type", "student_profiles", ["exam_type"])
    op.create_index("ix_student_profiles_created_at", "student_profiles", ["created_at"])


def downgrade() -> None:
    op.drop_index("ix_student_profiles_created_at", table_name="student_profiles")
    op.drop_index("ix_student_profiles_exam_type", table_name="student_profiles")
    op.drop_index("ix_student_profiles_major", table_name="student_profiles")
    op.drop_index("ix_student_profiles_phone", table_name="student_profiles")
    op.drop_index("ix_student_profiles_name", table_name="student_profiles")
    op.drop_table("student_profiles")

