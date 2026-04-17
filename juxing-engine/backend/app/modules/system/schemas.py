from pydantic import BaseModel


class PermissionItem(BaseModel):
    id: int
    code: str
    name: str
    description: str | None = None


class RoleItem(BaseModel):
    id: int
    code: str
    name: str
    description: str | None = None
    permissions: list[PermissionItem]


class RoleCreateRequest(BaseModel):
    code: str
    name: str
    description: str | None = None
    permission_ids: list[int] = []


class UserItem(BaseModel):
    id: int
    username: str
    display_name: str
    is_active: bool
    roles: list[RoleItem]


class UserCreateRequest(BaseModel):
    username: str
    display_name: str
    password: str
    role_ids: list[int] = []
