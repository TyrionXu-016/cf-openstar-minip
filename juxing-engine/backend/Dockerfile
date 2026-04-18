# syntax=docker/dockerfile:1.7
FROM docker.m.daocloud.io/library/python:3.12-slim

WORKDIR /app

ARG PIP_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
ARG PIP_TRUSTED_HOST=pypi.tuna.tsinghua.edu.cn
ENV PIP_INDEX_URL=${PIP_INDEX_URL}
ENV PIP_TRUSTED_HOST=${PIP_TRUSTED_HOST}
ENV PIP_DISABLE_PIP_VERSION_CHECK=1

COPY juxing-engine/backend/requirements.txt .
RUN --mount=type=cache,target=/root/.cache/pip \
    set -eux; \
    install_with_index() { \
      idx="$1"; host="$2"; \
      pip install --prefer-binary --progress-bar off --retries 20 --timeout 300 \
        -i "$idx" --trusted-host "$host" -r requirements.txt; \
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
