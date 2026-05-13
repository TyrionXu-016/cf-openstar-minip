#!/usr/bin/env bash
# 上线前备份：SQLite、Qdrant 持久化目录、客服上传文件（均在 compose 的 ./data 下）
# 数据出问题时的完整追回步骤见同目录：DATA_RECOVERY.md
#
# 用法（在仓库内）：
#   cd juxing-engine/deploy
#   chmod +x backup-before-deploy.sh
#   ./backup-before-deploy.sh
#
# 可选：先停后端再备份，SQLite 文件拷贝更一致（几十秒停机）
#   docker compose stop backend && ./backup-before-deploy.sh && docker compose start backend
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

STAMP="$(date +%Y%m%d_%H%M%S)"
OUT="${BACKUP_DIR:-$SCRIPT_DIR/backups/pre-deploy-$STAMP}"
mkdir -p "$OUT"

echo "备份目录: $OUT"

if [[ -f data/app.db ]]; then
  cp -a data/app.db "$OUT/app.db"
  echo "  已复制 data/app.db"
else
  echo "  跳过: data/app.db 不存在（若库在其它路径请自行拷贝）"
fi

if [[ -d data/uploads ]]; then
  cp -a data/uploads "$OUT/uploads"
  echo "  已复制 data/uploads"
fi

if [[ -d data/qdrant ]]; then
  tar -czf "$OUT/qdrant-storage.tgz" -C data qdrant
  echo "  已打包 data/qdrant -> qdrant-storage.tgz"
fi

echo "完成。追回步骤见同目录 DATA_RECOVERY.md。"
