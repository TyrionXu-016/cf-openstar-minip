from __future__ import annotations

from pydantic import BaseModel, Field


class SupportPhoneUpdate(BaseModel):
    """空字符串表示清除已保存的客服电话。"""

    phone: str = Field(default="", max_length=20)
