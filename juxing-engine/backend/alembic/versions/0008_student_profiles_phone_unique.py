"""dedupe student_profiles by phone then unique index on phone

Revision ID: 0008_student_profiles_phone_unique
Revises: 0007_admin_import_undo_batches
Create Date: 2026-05-13

升级步骤：
1) 按与业务一致规则去重：同一 phone 保留 created_at 最新、其次 id 最大的一条，删除其余。
2) 删除原非唯一索引 ix_student_profiles_phone，创建唯一索引 uq_student_profiles_phone。

去重在迁移内执行，无需先手工跑 SQL；若需在升级前单独预跑合并，可使用
backend/scripts/dedupe_student_profiles.py。

要求：SQLite 3.25+（支持窗口函数）或 PostgreSQL / MySQL 8+。
"""

from __future__ import annotations

import sqlalchemy as sa
from alembic import op

revision = "0008_student_profiles_phone_unique"
down_revision = "0007_admin_import_undo_batches"
branch_labels = None
depends_on = None


_DEDUPE_SQL = """
DELETE FROM student_profiles
WHERE id IN (
  SELECT id FROM (
    SELECT id,
           ROW_NUMBER() OVER (
             PARTITION BY phone
             ORDER BY created_at DESC, id DESC
           ) AS rn
    FROM student_profiles
  ) AS dedupe
  WHERE dedupe.rn > 1
);
"""


def upgrade() -> None:
    op.execute(sa.text(_DEDUPE_SQL))
    op.drop_index("ix_student_profiles_phone", table_name="student_profiles")
    op.create_index("uq_student_profiles_phone", "student_profiles", ["phone"], unique=True)


def downgrade() -> None:
    op.drop_index("uq_student_profiles_phone", table_name="student_profiles")
    op.create_index("ix_student_profiles_phone", "student_profiles", ["phone"], unique=False)
