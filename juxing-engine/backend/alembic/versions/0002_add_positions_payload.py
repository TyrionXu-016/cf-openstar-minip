"""add positions payload json

Revision ID: 0002_add_positions_payload
Revises: 0001_init_rbac
Create Date: 2026-04-16
"""

from alembic import op
import sqlalchemy as sa

revision = "0002_add_positions_payload"
down_revision = "0001_init_rbac"
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("positions", sa.Column("payload", sa.Text(), nullable=True))


def downgrade() -> None:
    op.drop_column("positions", "payload")

