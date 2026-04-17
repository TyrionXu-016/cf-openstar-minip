FROM python:3.12-slim

WORKDIR /app

COPY juxing-engine/backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY juxing-engine/backend/app ./app
COPY juxing-engine/backend/alembic ./alembic
COPY juxing-engine/backend/alembic.ini .
COPY data/processed/gw_positions.json /app/data/gw_positions.json

ENV PYTHONPATH=/app
ENV SQLITE_PATH=/data/app.db
ENV POSITIONS_JSON_PATH=/app/data/gw_positions.json

CMD ["sh", "-c", "alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port 8000"]
