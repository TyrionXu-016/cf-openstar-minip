from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.models import User
from app.db.session import get_db

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")


def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
) -> User:
    credential_error = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Token 无效或已过期",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        user_id = int(payload.get("sub", 0))
        token_type = payload.get("type")
        if token_type != "access" or user_id <= 0:
            raise credential_error
    except JWTError as exc:
        raise credential_error from exc

    user = db.scalar(select(User).where(User.id == user_id))
    if not user:
        raise credential_error
    return user


def require_permission(permission_code: str):
    def verifier(user: User = Depends(get_current_user)) -> User:
        all_permissions = {
            permission.code
            for role in user.roles
            for permission in role.permissions
        }
        if permission_code not in all_permissions and "super_admin" not in {r.code for r in user.roles}:
            raise HTTPException(status_code=403, detail="权限不足")
        return user

    return verifier
