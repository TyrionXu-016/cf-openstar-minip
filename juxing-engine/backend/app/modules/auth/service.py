from datetime import timedelta

from fastapi import HTTPException, status
from jose import JWTError, jwt
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import create_token, verify_password
from app.db.models import User
from app.modules.auth.schemas import MeResponse, TokenResponse


def authenticate(db: Session, username: str, password: str) -> User:
    user = db.scalar(select(User).where(User.username == username))
    if not user or not verify_password(password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="用户名或密码错误")
    if not user.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="账号已禁用")
    return user


def issue_tokens(user: User) -> TokenResponse:
    access = create_token(
        subject=str(user.id),
        token_type="access",
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    refresh = create_token(
        subject=str(user.id),
        token_type="refresh",
        expires_delta=timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES),
    )
    return TokenResponse(access_token=access, refresh_token=refresh)


def refresh_access_token(refresh_token: str) -> str:
    try:
        payload = jwt.decode(
            refresh_token,
            settings.JWT_SECRET_KEY,
            algorithms=[settings.JWT_ALGORITHM],
        )
        if payload.get("type") != "refresh":
            raise ValueError("Token 类型错误")
        user_id = str(payload.get("sub"))
    except (JWTError, ValueError) as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="refresh token 无效") from exc

    return create_token(
        subject=user_id,
        token_type="access",
        expires_delta=timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES),
    )


def build_me_response(user: User) -> MeResponse:
    roles = sorted({role.code for role in user.roles})
    permissions = sorted({permission.code for role in user.roles for permission in role.permissions})
    return MeResponse(
        id=user.id,
        username=user.username,
        display_name=user.display_name,
        roles=roles,
        permissions=permissions,
    )
