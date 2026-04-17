"""add questions table

Revision ID: 0003_add_questions_table
Revises: 0002_add_positions_payload
Create Date: 2026-04-16
"""

from alembic import op
import sqlalchemy as sa

revision = "0003_add_questions_table"
down_revision = "0002_add_positions_payload"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "questions",
        sa.Column("id", sa.String(length=64), nullable=False),
        sa.Column("category", sa.String(length=32), nullable=False),
        sa.Column("subject", sa.String(length=64), nullable=False),
        sa.Column("difficulty", sa.String(length=16), nullable=False),
        sa.Column("question", sa.Text(), nullable=False),
        sa.Column("options_json", sa.Text(), nullable=False),
        sa.Column("answer", sa.String(length=16), nullable=False),
        sa.Column("explanation", sa.Text(), nullable=False),
        sa.Column("source", sa.String(length=16), nullable=False, server_default="manual"),
        sa.Column("created_at", sa.DateTime(), server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(), server_default=sa.func.now()),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_questions_category", "questions", ["category"])
    op.create_index("ix_questions_subject", "questions", ["subject"])
    op.create_index("ix_questions_difficulty", "questions", ["difficulty"])


def downgrade() -> None:
    op.drop_index("ix_questions_difficulty", table_name="questions")
    op.drop_index("ix_questions_subject", table_name="questions")
    op.drop_index("ix_questions_category", table_name="questions")
    op.drop_table("questions")

