from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    APP_NAME: str = "OpenStar Backend"
    JWT_SECRET_KEY: str = "replace-me-in-production"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7
    SQLITE_PATH: str = "/data/app.db"
    POSITIONS_JSON_PATH: str = "/app/data/gw_positions.json"
    CORS_ORIGINS: str = "http://localhost:3000,http://127.0.0.1:3000"

    # 语义知识库（Qdrant + 本地 embedding）
    QDRANT_HOST: str = "localhost"
    QDRANT_PORT: int = 6333
    QDRANT_COLLECTION: str = "positions"
    EMBEDDING_MODEL_NAME: str = "shibing624/text2vec-base-chinese"
    VECTOR_TOPK_DEFAULT: int = 80
    SEMANTIC_UPSERT_BATCH_SIZE: int = 64

    # 题库智能识别（OpenAI 兼容接口）
    LLM_BASE_URL: str = "https://api.openai.com/v1"
    LLM_API_KEY: str = ""
    LLM_MODEL: str = "gpt-4o-mini"
    LLM_TIMEOUT_SECONDS: int = 60

    @property
    def cors_origins(self) -> list[str]:
        return [item.strip() for item in self.CORS_ORIGINS.split(",") if item.strip()]


settings = Settings()
