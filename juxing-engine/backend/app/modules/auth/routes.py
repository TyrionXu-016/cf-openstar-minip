from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.models import User
from app.db.session import get_db
from app.modules.auth.schemas import LoginRequest, MeResponse, RefreshRequest, TokenResponse
from app.modules.auth.service import authenticate, build_me_response, issue_tokens, refresh_access_token
from app.schemas.common import MessageResponse

router = APIRouter()


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)) -> TokenResponse:
    user = authenticate(db, payload.username, payload.password)
    return issue_tokens(user)


@router.post("/refresh", response_model=TokenResponse)
def refresh_token(payload: RefreshRequest) -> TokenResponse:
    access_token = refresh_access_token(payload.refresh_token)
    return TokenResponse(access_token=access_token, refresh_token=payload.refresh_token)


@router.post("/logout", response_model=MessageResponse)
def logout() -> MessageResponse:
    return MessageResponse(message="已退出登录")


@router.get("/me", response_model=MeResponse)
def me(current_user: User = Depends(get_current_user)) -> MeResponse:
    return build_me_response(current_user)
