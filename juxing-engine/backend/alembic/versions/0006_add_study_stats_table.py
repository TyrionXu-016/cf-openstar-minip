"""add study_stats table

Revision ID: 0006_add_study_stats_table
Revises: 0005_add_favorite_positions_table
Create Date: 2026-04-18
"""

from alembic import op
import sqlalchemy as sa

revision = "0006_add_study_stats_table"
down_revision = "0005_add_favorite_positions_table"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "study_stats",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("student_phone", sa.String(length=20), nullable=False),
        sa.Column("total_questions", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("correct_count", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("study_days", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("essay_count", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("today_study_date", sa.String(length=10), nullable=True),
        sa.Column("today_questions", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("created_at", sa.DateTime(), server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(), server_default=sa.func.now()),
    )
    op.create_index("ix_study_stats_student_phone", "study_stats", ["student_phone"], unique=True)


def downgrade() -> None:
    op.drop_index("ix_study_stats_student_phone", table_name="study_stats")
    op.drop_table("study_stats")
