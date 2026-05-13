from pydantic import BaseModel


class UndoImportResponse(BaseModel):
    deleted: int
    missing: int
    batch_size: int
