#!/usr/bin/env python3
"""合并 student_profiles 中同一手机号的重复行（保留最新一条）。

迁移 0008_student_profiles_phone_unique 已包含等价 SQL 去重；本脚本用于：
- 在升级 Alembic 之前单独预跑、观察日志；
- 或在不方便跑迁移的环境里临时清洗数据。

用法（在 backend 目录下，且已配置 PYTHONPATH 或安装为包）::

    cd juxing-engine/backend
    python3 scripts/dedupe_student_profiles.py
"""

from __future__ import annotations

import sys
from pathlib import Path

# 保证可从 backend 根目录直接运行
_ROOT = Path(__file__).resolve().parents[1]
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from app.db.session import SessionLocal  # noqa: E402
from app.modules.student_profiles.service import dedupe_profiles_by_phone  # noqa: E402


def main() -> None:
    db = SessionLocal()
    try:
        n = dedupe_profiles_by_phone(db)
        print(f"removed_profile_rows={n}")
    finally:
        db.close()


if __name__ == "__main__":
    main()
