#!/usr/bin/env python3
"""写入仅供本机验证分页用的岗位与题目（SQLite）。

使用前请在 backend 目录下激活 .venv 并确保 .env 中 SQLITE_PATH 指向本机库：

  cd juxing-engine/backend
  source .venv/bin/activate
  python scripts/seed_local_verification_data.py

数据特征：
  - 岗位 id：990001–990130（130 条，超过一页 100）
  - 题目 id：local-v-0001 …（55 条，超过一页 50）

payload/json 中含 \"localSeed\": true，需要清空时可执行：

  python scripts/seed_local_verification_data.py --clean

数据库文件见 .gitignore（*.db 不提交远端）。
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from sqlalchemy import delete, func, select

from app.db.models import Position, Question
from app.db.session import SessionLocal

POSITION_ID_MIN = 990_001
POSITION_COUNT = 130
QUESTION_PREFIX = "local-v-"
QUESTION_COUNT = 55


def _clean(session) -> None:
    session.execute(delete(Position).where(Position.id >= POSITION_ID_MIN))
    session.execute(
        delete(Question).where(Question.id.like(f"{QUESTION_PREFIX}%")),
    )
    session.commit()
    print("已删除本地验证岗位与题目。")


def _seed_positions(session) -> int:
    n = 0
    for i in range(POSITION_COUNT):
        pid = POSITION_ID_MIN + i
        payload = {"localSeed": True, "index": i}
        row = Position(
            id=pid,
            name=f"[本地验证] 测试岗位 {i + 1}",
            category="国考",
            sub_category="综合",
            description=f"本机分页验证用 id={pid}",
            is_three_free=(i % 7 == 0),
            payload=json.dumps(payload, ensure_ascii=False),
        )
        session.merge(row)
        n += 1
    return n


def _seed_questions(session) -> int:
    options_list = [
        {"key": "A", "text": "选项甲"},
        {"key": "B", "text": "选项乙"},
        {"key": "C", "text": "选项丙"},
        {"key": "D", "text": "选项丁"},
    ]
    options_json = json.dumps(options_list, ensure_ascii=False)
    n = 0
    for i in range(QUESTION_COUNT):
        qid = f"{QUESTION_PREFIX}{i + 1:04d}"
        row = Question(
            id=qid,
            category="lx",
            subject="本地验证",
            difficulty="中等",
            question=f"[本地验证] 题干示例 {i + 1}（用于分页）",
            options_json=options_json,
            answer="A",
            explanation=f"解析占位 localSeed idx={i}",
            source="local_seed",
        )
        session.merge(row)
        n += 1
    return n


def main() -> None:
    parser = argparse.ArgumentParser(description="写入本机分页验证数据（SQLite）")
    parser.add_argument("--clean", action="store_true", help="删除本次脚本写入的验证数据")
    args = parser.parse_args()

    with SessionLocal() as session:
        if args.clean:
            _clean(session)
            return

        pn = _seed_positions(session)
        qn = _seed_questions(session)
        session.commit()

        p_total = session.scalar(select(func.count()).select_from(Position).where(Position.id >= POSITION_ID_MIN))
        q_total = session.scalar(
            select(func.count()).select_from(Question).where(Question.id.like(f"{QUESTION_PREFIX}%")),
        )

    print(f"已写入本地验证数据：岗位 {pn} 条（id≥{POSITION_ID_MIN}），题目 {qn} 条（id 前缀 {QUESTION_PREFIX}）。")
    print(f"当前库中累计：验证岗位 {p_total} 条，验证题目 {q_total} 条。")


if __name__ == "__main__":
    main()
