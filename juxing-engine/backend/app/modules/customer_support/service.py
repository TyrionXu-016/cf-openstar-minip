from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from pathlib import Path

from app.core.config import settings

STEM = "support_wechat_qr"
CONTACT_JSON = "support_contact.json"
MAX_BYTES = 2 * 1024 * 1024
_CN_MOBILE = re.compile(r"^1[3-9]\d{9}$")


def _sqlite_path() -> Path:
    p = Path(settings.SQLITE_PATH).expanduser()
    if not p.is_absolute():
        p = Path.cwd() / p
    return p


def upload_dir() -> Path:
    d = _sqlite_path().parent / "uploads"
    d.mkdir(parents=True, exist_ok=True)
    return d


def find_qr_path() -> Path | None:
    d = upload_dir()
    for ext in (".png", ".jpg", ".jpeg", ".webp"):
        candidate = d / f"{STEM}{ext}"
        if candidate.is_file() and candidate.stat().st_size > 0:
            return candidate
    return None


def media_type_for_path(p: Path) -> str:
    ext = p.suffix.lower()
    return {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".webp": "image/webp",
    }.get(ext, "application/octet-stream")


def _validate_image_magic(head: bytes) -> bool:
    if len(head) < 12:
        return False
    if head[:8] == b"\x89PNG\r\n\x1a\n":
        return True
    if head[:3] == b"\xff\xd8\xff":
        return True
    if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
        return True
    return False


def save_uploaded_qr(content: bytes, original_name: str | None) -> Path:
    if len(content) > MAX_BYTES:
        raise ValueError("图片不能超过 2MB")
    if not _validate_image_magic(content[:16]):
        raise ValueError("请上传 PNG、JPEG 或 WebP 图片")

    ext = Path(original_name or "").suffix.lower()
    if ext not in {".png", ".jpg", ".jpeg", ".webp"}:
        if content[:8] == b"\x89PNG\r\n\x1a\n":
            ext = ".png"
        elif content[:3] == b"\xff\xd8\xff":
            ext = ".jpg"
        else:
            ext = ".webp"

    d = upload_dir()
    for old in d.glob(f"{STEM}.*"):
        try:
            if old.is_file():
                old.unlink()
        except OSError:
            pass

    out = d / f"{STEM}{ext}"
    out.write_bytes(content)
    return out


def qr_meta() -> dict | None:
    p = find_qr_path()
    if not p:
        return None
    st = p.stat()
    return {
        "filename": p.name,
        "updatedAt": datetime.fromtimestamp(st.st_mtime, tz=timezone.utc).isoformat(),
        "sizeBytes": int(st.st_size),
    }


def get_contact_phone() -> str | None:
    path = upload_dir() / CONTACT_JSON
    if not path.is_file():
        return None
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        v = str(data.get("phone") or "").strip()
        return v or None
    except (OSError, json.JSONDecodeError, TypeError):
        return None


def set_contact_phone(phone: str | None) -> None:
    raw = (phone or "").strip()
    if not raw:
        path = upload_dir() / CONTACT_JSON
        if path.is_file():
            path.unlink()
        return
    if not _CN_MOBILE.fullmatch(raw):
        raise ValueError("请输入 11 位中国大陆手机号（1 开头）")
    upload_dir().mkdir(parents=True, exist_ok=True)
    path = upload_dir() / CONTACT_JSON
    path.write_text(json.dumps({"phone": raw}, ensure_ascii=False), encoding="utf-8")


def phone_meta() -> dict | None:
    p = upload_dir() / CONTACT_JSON
    if not p.is_file():
        return None
    phone = get_contact_phone()
    if not phone:
        return None
    st = p.stat()
    return {
        "phone": phone,
        "updatedAt": datetime.fromtimestamp(st.st_mtime, tz=timezone.utc).isoformat(),
    }
