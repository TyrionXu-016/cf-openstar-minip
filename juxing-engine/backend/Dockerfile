# syntax=docker/dockerfile:1.7
FROM docker.m.daocloud.io/library/python:3.12-slim

WORKDIR /app

ARG PIP_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
ARG PIP_TRUSTED_HOST=pypi.tuna.tsinghua.edu.cn
ENV PIP_INDEX_URL=${PIP_INDEX_URL}
ENV PIP_TRUSTED_HOST=${PIP_TRUSTED_HOST}
ENV PIP_DISABLE_PIP_VERSION_CHECK=1

COPY juxing-engine/backend/requirements.txt juxing-engine/backend/requirements.docker.txt ./
# 先装 CPU 版 torch（~200MB 级），避免从默认 PyPI 拉 CUDA 全家桶（torch+cu12 等 ~1GB+，易构建数小时）
RUN --mount=type=cache,target=/root/.cache/pip \
    set -eux; \
    pip install --prefer-binary --progress-bar off --retries 20 --timeout 600 \
      torch==2.11.0 --index-url https://download.pytorch.org/whl/cpu; \
    install_with_index() { \
      idx="$1"; host="$2"; \
      pip install --prefer-binary --progress-bar off --retries 20 --timeout 300 \
        -i "$idx" --trusted-host "$host" -r requirements.docker.txt; \
    }; \
    install_with_index "https://pypi.tuna.tsinghua.edu.cn/simple" "pypi.tuna.tsinghua.edu.cn" || \
    install_with_index "https://mirrors.aliyun.com/pypi/simple/" "mirrors.aliyun.com" || \
    install_with_index "https://pypi.org/simple" "pypi.org"

COPY juxing-engine/backend/app ./app
COPY juxing-engine/backend/alembic ./alembic
COPY juxing-engine/backend/alembic.ini .
COPY data/processed/gw_positions.json /app/data/gw_positions.json

ENV PYTHONPATH=/app
ENV SQLITE_PATH=/data/app.db
ENV POSITIONS_JSON_PATH=/app/data/gw_positions.json

CMD ["sh", "-c", "alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000"]
