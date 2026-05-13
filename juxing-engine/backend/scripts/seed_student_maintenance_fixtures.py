#!/usr/bin/env python3
"""写入本机「学员主数据 / 学习统计 / 收藏」测试数据（SQLite）。

用于验证：管理端列表与编辑、合并重复手机号、换号迁移、按号清空、学习统计覆盖；
以及（在未对 phone 建唯一约束的库上）同号多条档案的去重脚本 / 迁移。

使用前在 backend 目录激活虚拟环境，并保证 .env 中 SQLITE_PATH 指向本机库：

  cd juxing-engine/backend
  source .venv/bin/activate   # 或你的环境
  python scripts/seed_student_maintenance_fixtures.py

若尚未写入分页验证岗位，可先执行：

  python scripts/seed_local_verification_data.py

清空本脚本写入的数据：

  python scripts/seed_student_maintenance_fixtures.py --clean

说明：
  - 测试手机号段：19900004001–19900004099（与业务真实号段区分）。
  - 同号多条档案：仅在检测到 student_profiles.phone **尚无**唯一索引时写入；
    已执行迁移 0008 的库会自动跳过该块并提示。
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from sqlalchemy import delete, func, inspect, select
from sqlalchemy.exc import IntegrityError

from app.db.models import FavoritePosition, Position, StudentProfile, StudyStats
from app.db.session import SessionLocal

# 与 seed_local_verification_data 的岗位 id 对齐，便于收藏关联
SEED_POSITION_ID = 990_001

P_SINGLE = "19900004001"
P_MIGRATE_OLD = "19900004010"
P_MIGRATE_NEW = "19900004011"
P_PURGE = "19900004020"
P_STATS_ONLY = "19900004030"
P_DUP = "19900004040"

SOURCE = "local_seed"
ALL_PHONES = (P_SINGLE, P_MIGRATE_OLD, P_MIGRATE_NEW, P_PURGE, P_STATS_ONLY, P_DUP)


def _phone_unique_on_table(session) -> bool:
    insp = inspect(session.bind)
    for ix in insp.get_indexes("student_profiles"):
        if ix.get("unique") and list(ix.get("column_names") or []) == ["phone"]:
            return True
    for uc in insp.get_unique_constraints("student_profiles") or []:
        cols = list(uc.get("column_names") or [])
        if cols == ["phone"]:
            return True
    return False


def _resolve_position_id(session) -> int | None:
    if session.get(Position, SEED_POSITION_ID):
        return SEED_POSITION_ID
    return session.scalar(select(func.min(Position.id)))


def _delete_fixture_rows(session, *, echo: bool) -> None:
    session.execute(delete(FavoritePosition).where(FavoritePosition.student_phone.in_(ALL_PHONES)))
    session.execute(delete(StudyStats).where(StudyStats.student_phone.in_(ALL_PHONES)))
    session.execute(delete(StudentProfile).where(StudentProfile.phone.in_(ALL_PHONES)))
    session.commit()
    if echo:
        print("已删除本脚本写入的学员/统计/收藏测试数据。")


def _profile(
    *,
    phone: str,
    name: str,
    age: int = 22,
    major: str = "行政管理",
    created_at: datetime | None = None,
) -> StudentProfile:
    row = StudentProfile(
        name=name,
        phone=phone,
        age=age,
        gender="男",
        education="本科",
        school="本地种子大学",
        major=major,
        exam_type="国考",
        source=SOURCE,
    )
    if created_at is not None:
        row.created_at = created_at
    return row


def _stats(phone: str, *, total: int, correct: int, days: int, essay: int, today: str, today_q: int) -> StudyStats:
    return StudyStats(
        student_phone=phone,
        total_questions=total,
        correct_count=min(correct, total),
        study_days=days,
        essay_count=essay,
        today_study_date=today or None,
        today_questions=today_q,
    )


def _favorite(phone: str, position_id: int, name: str) -> FavoritePosition:
    payload = json.dumps({"localSeed": True, "fixture": "student_maintenance"}, ensure_ascii=False)
    return FavoritePosition(
        student_phone=phone,
        position_id=position_id,
        position_name=name,
        payload=payload,
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="学员主数据维护功能本机测试数据")
    parser.add_argument("--clean", action="store_true", help="删除本脚本写入的测试数据")
    args = parser.parse_args()

    with SessionLocal() as session:
        if args.clean:
            _delete_fixture_rows(session, echo=True)
            return

        pos_id = _resolve_position_id(session)
        if pos_id is None:
            print("警告：库中无任何岗位，已跳过收藏写入。请先 seed_local_verification_data 或导入岗位。")

        # 先清同号旧数据，避免重复执行脚本时报唯一冲突
        _delete_fixture_rows(session, echo=False)
        session.expire_all()

        # 单档案 + 统计 + 收藏（管理端编辑 / 统计覆盖）
        session.add(_profile(phone=P_SINGLE, name="单档案用户"))
        session.add(_stats(P_SINGLE, total=120, correct=80, days=5, essay=2, today="2026-05-10", today_q=3))
        if pos_id is not None:
            session.add(_favorite(P_SINGLE, pos_id, f"收藏岗位 pos={pos_id}"))

        # 换号迁移：旧号有档案+统计+收藏；新号空
        session.add(_profile(phone=P_MIGRATE_OLD, name="迁出用户", major="法学"))
        session.add(_stats(P_MIGRATE_OLD, total=50, correct=30, days=3, essay=1, today="2026-05-12", today_q=10))
        if pos_id is not None:
            session.add(_favorite(P_MIGRATE_OLD, pos_id, "迁出用户收藏"))

        # 按号清空：三样俱全
        session.add(_profile(phone=P_PURGE, name="待清空用户"))
        session.add(_stats(P_PURGE, total=9, correct=7, days=1, essay=0, today="", today_q=0))
        if pos_id is not None:
            session.add(_favorite(P_PURGE, pos_id, "待清空收藏"))

        # 仅统计无档案（管理端 GET/PATCH study-stats）
        session.add(_stats(P_STATS_ONLY, total=200, correct=150, days=10, essay=4, today="2026-05-13", today_q=5))

        dup_ok = not _phone_unique_on_table(session)
        if dup_ok:
            session.add(_profile(phone=P_DUP, name="重复旧", created_at=datetime(2024, 1, 1, 10, 0, 0)))
            session.add(_profile(phone=P_DUP, name="重复中", created_at=datetime(2024, 8, 1, 10, 0, 0)))
            session.add(_profile(phone=P_DUP, name="重复保留最新", created_at=datetime(2026, 1, 1, 10, 0, 0)))
            session.add(_stats(P_DUP, total=15, correct=10, days=2, essay=0, today="2026-05-01", today_q=1))
            print(f"已写入同号重复档案（{P_DUP}）共 3 条，可用于「合并重复手机号」或 dedupe_student_profiles.py。")
        else:
            session.add(_profile(phone=P_DUP, name="唯一约束下仅一条"))
            session.add(_stats(P_DUP, total=15, correct=10, days=2, essay=0, today="2026-05-01", today_q=1))
            print("检测到 student_profiles.phone 唯一索引：跳过同号多条，该号仅写入单条档案。")

        try:
            session.commit()
        except IntegrityError as e:
            session.rollback()
            print(f"提交失败（唯一约束或外键）：{e}")
            sys.exit(1)

    print("本机学员维护测试数据已写入。手机号对照：")
    print(f"  - {P_SINGLE}  单档案+统计+收藏（编辑/统计覆盖）")
    print(f"  - {P_MIGRATE_OLD} → {P_MIGRATE_NEW}  换号迁移（旧有数据，新号空）")
    print(f"  - {P_PURGE}  按号清空（档案+统计+收藏）")
    print(f"  - {P_STATS_ONLY}  仅学习统计无档案")
    print(f"  - {P_DUP}  去重场景（见上方是否写入 3 条）")
    print("管理端操作建议：")
    print("  合并重复：点「合并重复手机号档案」或运行 python scripts/dedupe_student_profiles.py")
    print(f"  换号：旧号 {P_MIGRATE_OLD}，新号 {P_MIGRATE_NEW}")
    print(f"  清空：{P_PURGE}")
    print(f"  统计：加载 {P_STATS_ONLY} 或 {P_SINGLE}")


if __name__ == "__main__":
    main()
