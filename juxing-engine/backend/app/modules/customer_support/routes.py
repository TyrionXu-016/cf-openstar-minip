from __future__ import annotations

from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.responses import FileResponse

from app.api.deps import require_permission
from app.modules.customer_support import service
from app.modules.customer_support.schemas import SupportPhoneUpdate

mini_router = APIRouter()
admin_router = APIRouter()


@mini_router.get("/support-wechat")
def mini_support_wechat_info() -> dict:
    """小程序：是否已配置二维码图、客服电话等。"""
    has_qr = service.find_qr_path() is not None
    phone = service.get_contact_phone()
    return {
        "success": True,
        "hasQr": has_qr,
        "qrPath": "/api/v1/mini/support-wechat/qr" if has_qr else None,
        "hasPhone": bool(phone),
        "phone": phone,
    }


@mini_router.get("/support-wechat/qr")
def mini_support_wechat_qr() -> FileResponse:
    p = service.find_qr_path()
    if not p:
        raise HTTPException(status_code=404, detail="尚未配置联系客服图片")
    return FileResponse(
        path=str(p),
        media_type=service.media_type_for_path(p),
        filename=p.name,
    )


@admin_router.get(
    "/support-wechat",
    dependencies=[Depends(require_permission("role:read"))],
)
def admin_support_wechat_status() -> dict:
    meta = service.qr_meta()
    phone_meta = service.phone_meta()
    return {
        "hasQr": meta is not None,
        "meta": meta,
        "hasPhone": phone_meta is not None,
        "phone": phone_meta["phone"] if phone_meta else None,
        "phoneMeta": phone_meta,
    }


@admin_router.patch(
    "/support-wechat/phone",
    dependencies=[Depends(require_permission("role:write"))],
)
def admin_support_wechat_set_phone(payload: SupportPhoneUpdate) -> dict:
    try:
        service.set_contact_phone(payload.phone)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return {"ok": True, "message": "已保存客服电话"}


@admin_router.post(
    "/support-wechat/qr",
    dependencies=[Depends(require_permission("role:write"))],
)
async def admin_support_wechat_upload_qr(file: UploadFile = File(...)) -> dict:
    content = await file.read()
    try:
        service.save_uploaded_qr(content, file.filename)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    return {"ok": True, "message": "已更新联系客服展示图"}
