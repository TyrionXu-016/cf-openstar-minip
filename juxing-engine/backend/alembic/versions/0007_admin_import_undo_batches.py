"""add admin_import_undo_batches table

Revision ID: 0007_admin_import_undo_batches
Revises: 0006_add_study_stats_table
Create Date: 2026-05-13
"""

from alembic import op
import sqlalchemy as sa

revision = "0007_admin_import_undo_batches"
down_revision = "0006_add_study_stats_table"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "admin_import_undo_batches",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("resource", sa.String(length=32), nullable=False),
        sa.Column("entity_ids_json", sa.Text(), nullable=False),
        sa.Column("created_at", sa.DateTime(), server_default=sa.func.now()),
    )
    op.create_index("ix_admin_import_undo_batches_resource", "admin_import_undo_batches", ["resource"])


def downgrade() -> None:
    op.drop_index("ix_admin_import_undo_batches_resource", table_name="admin_import_undo_batches")
    op.drop_table("admin_import_undo_batches")
