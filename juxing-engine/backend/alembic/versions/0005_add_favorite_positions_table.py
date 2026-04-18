"""add favorite positions table

Revision ID: 0005_add_favorite_positions_table
Revises: 0004_add_student_profiles_table
Create Date: 2026-04-17
"""

from alembic import op
import sqlalchemy as sa

revision = "0005_add_favorite_positions_table"
down_revision = "0004_add_student_profiles_table"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "favorite_positions",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("student_phone", sa.String(length=20), nullable=False),
        sa.Column("position_id", sa.Integer(), nullable=False),
        sa.Column("position_name", sa.String(length=255), nullable=False),
        sa.Column("payload", sa.Text(), nullable=False),
        sa.Column("created_at", sa.DateTime(), server_default=sa.func.now()),
        sa.UniqueConstraint("student_phone", "position_id", name="uq_favorite_phone_position"),
    )
    op.create_index("ix_favorite_positions_student_phone", "favorite_positions", ["student_phone"])
    op.create_index("ix_favorite_positions_position_id", "favorite_positions", ["position_id"])
    op.create_index("ix_favorite_positions_created_at", "favorite_positions", ["created_at"])


def downgrade() -> None:
    op.drop_index("ix_favorite_positions_created_at", table_name="favorite_positions")
    op.drop_index("ix_favorite_positions_position_id", table_name="favorite_positions")
    op.drop_index("ix_favorite_positions_student_phone", table_name="favorite_positions")
    op.drop_table("favorite_positions")

