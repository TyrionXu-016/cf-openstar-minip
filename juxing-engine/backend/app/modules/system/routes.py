from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func, select
from sqlalchemy.orm import Session, selectinload

from app.api.deps import require_permission
from app.core.security import get_password_hash
from app.db.models import Permission, Position, Role, User
from app.db.session import get_db
from app.modules.system.schemas import (
    PermissionItem,
    RoleCreateRequest,
    RoleItem,
    UserCreateRequest,
    UserItem,
)

router = APIRouter()


@router.get("/dashboard/summary", dependencies=[Depends(require_permission("user:read"))])
def dashboard_summary(db: Session = Depends(get_db)) -> dict[str, int]:
    admin_count = db.scalar(select(func.count(User.id))) or 0
    role_count = db.scalar(select(func.count(Role.id))) or 0
    permission_count = db.scalar(select(func.count(Permission.id))) or 0
    position_count = db.scalar(select(func.count(Position.id))) or 0
    return {
        "admin_count": int(admin_count),
        "role_count": int(role_count),
        "permission_count": int(permission_count),
        "position_count": int(position_count),
    }


def _permission_to_item(permission: Permission) -> PermissionItem:
    return PermissionItem(
        id=permission.id,
        code=permission.code,
        name=permission.name,
        description=permission.description,
    )


def _role_to_item(role: Role) -> RoleItem:
    return RoleItem(
        id=role.id,
        code=role.code,
        name=role.name,
        description=role.description,
        permissions=[_permission_to_item(item) for item in role.permissions],
    )


def _user_to_item(user: User) -> UserItem:
    return UserItem(
        id=user.id,
        username=user.username,
        display_name=user.display_name,
        is_active=user.is_active,
        roles=[_role_to_item(role) for role in user.roles],
    )


@router.get("/permissions", response_model=list[PermissionItem], dependencies=[Depends(require_permission("role:read"))])
def list_permissions(db: Session = Depends(get_db)) -> list[PermissionItem]:
    rows = db.scalars(select(Permission).order_by(Permission.id)).all()
    return [_permission_to_item(item) for item in rows]


@router.get("/roles", response_model=list[RoleItem], dependencies=[Depends(require_permission("role:read"))])
def list_roles(db: Session = Depends(get_db)) -> list[RoleItem]:
    rows = db.scalars(select(Role).options(selectinload(Role.permissions)).order_by(Role.id)).all()
    return [_role_to_item(item) for item in rows]


@router.post("/roles", response_model=RoleItem, dependencies=[Depends(require_permission("role:write"))])
def create_role(payload: RoleCreateRequest, db: Session = Depends(get_db)) -> RoleItem:
    role = Role(code=payload.code, name=payload.name, description=payload.description)
    if payload.permission_ids:
        permissions = db.scalars(
            select(Permission).where(Permission.id.in_(payload.permission_ids))
        ).all()
        role.permissions = permissions
    db.add(role)
    db.commit()
    db.refresh(role)
    return _role_to_item(role)


@router.get("/users", response_model=list[UserItem], dependencies=[Depends(require_permission("user:read"))])
def list_users(db: Session = Depends(get_db)) -> list[UserItem]:
    rows = db.scalars(
        select(User).options(selectinload(User.roles).selectinload(Role.permissions)).order_by(User.id)
    ).all()
    return [_user_to_item(item) for item in rows]


@router.post("/users", response_model=UserItem, dependencies=[Depends(require_permission("user:write"))])
def create_user(payload: UserCreateRequest, db: Session = Depends(get_db)) -> UserItem:
    exists = db.scalar(select(User).where(User.username == payload.username))
    if exists:
        raise HTTPException(status_code=400, detail="用户名已存在")

    role_rows = []
    if payload.role_ids:
        role_rows = db.scalars(select(Role).where(Role.id.in_(payload.role_ids))).all()

    user = User(
        username=payload.username,
        display_name=payload.display_name,
        password_hash=get_password_hash(payload.password),
        is_active=True,
    )
    user.roles = role_rows
    db.add(user)
    db.commit()
    db.refresh(user)
    return _user_to_item(user)
