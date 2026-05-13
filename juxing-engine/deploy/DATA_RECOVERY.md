# 数据备份与追回说明

**位置**：与本目录下的 `docker-compose.yml`、`backup-before-deploy.sh` 同级。  
**适用场景**：误删数据、迁移失败、升级后库损坏、需要回滚到某次备份等。

---

## 1. 重要数据都在哪（当前 compose 约定）

`docker-compose.yml` 将主机目录 **`./data`** 挂载到容器内的 **`/data`**：

| 路径（在 `juxing-engine/deploy` 下） | 内容 |
|--------------------------------------|------|
| `data/app.db` | SQLite：学员档案、学习统计、收藏、岗位、题目、管理员等 |
| `data/uploads/` | 客服二维码、`support_contact.json`（与 `SQLITE_PATH` 同父目录） |
| `data/qdrant/` | Qdrant 向量库持久化文件（智能选岗语义检索） |

> 若你改过 compose 挂载或环境变量 `SQLITE_PATH`，以实际挂载为准；本说明默认与仓库内 compose 一致。

---

## 2. 上线前如何备份（推荐）

在 **`juxing-engine/deploy`** 目录执行：

```bash
# 可选：先停后端，保证 SQLite 拷贝瞬间无写入
docker compose stop backend

./backup-before-deploy.sh

docker compose start backend
```

备份默认生成在：`backups/pre-deploy-YYYYMMDD_HHMMSS/`。

指定其它目录：

```bash
BACKUP_DIR=/path/to/safe/backup-dir ./backup-before-deploy.sh
```

---

## 3. 追回（恢复）流程

以下命令均在 **`juxing-engine/deploy`** 下执行。将 `pre-deploy-XXXXXXXX_XXXXXX` 换成你的实际备份文件夹名。

### 3.1 停服务

```bash
docker compose stop backend
```

（若需同时避免其它服务写入 Qdrant，可按需 `docker compose stop`。）

### 3.2 恢复 SQLite（主库）

```bash
cp -a backups/pre-deploy-XXXXXXXX_XXXXXX/app.db data/app.db
```

若备份里没有 `app.db`，说明当时未生成库文件，无法用本步恢复。

### 3.3 恢复客服上传文件（可选）

若备份中含 `uploads` 目录：

```bash
rm -rf data/uploads
cp -a backups/pre-deploy-XXXXXXXX_XXXXXX/uploads data/uploads
```

若无该目录，说明当时未上传过客服素材，可跳过。

### 3.4 恢复 Qdrant 向量数据（可选）

仅在你需要恢复到备份当时的向量索引时执行（会覆盖当前向量库）：

```bash
rm -rf data/qdrant
mkdir -p data
tar -xzf backups/pre-deploy-XXXXXXXX_XXXXXX/qdrant-storage.tgz -C data
```

若无 `qdrant-storage.tgz`，可跳过；恢复后若选岗语义异常，可在管理端或 API 对岗位执行重新建索引（按你们现有运维方式）。

### 3.5 启动并自检

```bash
docker compose start backend
docker compose logs -f --tail=100 backend
```

检查：

- 日志中 `alembic upgrade head` 是否报错（**旧库恢复到新代码**时可能出现迁移版本不一致，需个案处理）。
- `curl -sS http://127.0.0.1:4100/healthz`（端口以你机器映射为准）。

---

## 4. 版本与迁移注意事项

- **用新代码 + 旧 `app.db` 启动**：容器仍会执行 `alembic upgrade head`。若旧库已低于当前迁移版本，会依次升级；若旧库迁移版本**高于**镜像内脚本（极少见），需开发人员处理。
- **用旧 `app.db` 刻意长期停留在旧迁移**：不推荐；应与代码版本配套或只做短期救火。
- **迁移 `0008`（手机号去重）**：仅在**第一次**执行到该版本时会对 `student_profiles` 去重；恢复**早于 0008 的备份**后再次升级可能再次触发（若 Alembic 认为未执行过）。恢复前务必确认备份与业务预期。

---

## 5. 无脚本时的手工备份

若现场没有 `backup-before-deploy.sh`，至少拷贝：

```bash
tar -czvf manual-backup-$(date +%Y%m%d_%H%M%S).tgz data/app.db data/uploads data/qdrant
```

（`data/qdrant` 体积可能较大，磁盘要留足空间。）

---

## 6. 仍无法解决时

- 确认备份目录完整、磁盘权限与剩余空间。
- 保留故障时的 `docker compose logs backend` 与备份路径，联系开发人员对照 Alembic 版本与 `SQLITE_PATH`。
