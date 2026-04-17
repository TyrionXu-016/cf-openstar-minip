import json
from pathlib import Path

from sqlalchemy import select

from app.core.config import settings
from app.core.security import get_password_hash
from app.db.models import Permission, Position, Role, User
from app.db.session import Base, SessionLocal, engine


def _seed_auth_data() -> None:
    with SessionLocal() as db:
        has_user = db.scalar(select(User).limit(1))
        if has_user:
            return

        permissions = [
            Permission(name="用户查看", code="user:read", description="查看用户列表"),
            Permission(name="用户编辑", code="user:write", description="新增和编辑用户"),
            Permission(name="角色查看", code="role:read", description="查看角色权限"),
            Permission(name="角色编辑", code="role:write", description="新增和编辑角色"),
        ]
        db.add_all(permissions)
        db.flush()

        admin_role = Role(name="超级管理员", code="super_admin", description="拥有全部管理权限")
        admin_role.permissions = permissions
        db.add(admin_role)
        db.flush()

        user = User(
            username="admin",
            display_name="系统管理员",
            password_hash=get_password_hash("Admin@123456"),
            is_active=True,
        )
        user.roles = [admin_role]
        db.add(user)
        db.commit()


def _seed_positions() -> None:
    path = Path(settings.POSITIONS_JSON_PATH)
    if not path.exists():
        return

    with SessionLocal() as db:
        has_any = db.scalar(select(Position.id).limit(1))
        needs_payload = db.scalar(select(Position.id).where(Position.payload.is_(None)).limit(1))
        if has_any and not needs_payload:
            return

        items = json.loads(path.read_text(encoding="utf-8"))
        existing_by_id = {}
        if has_any:
            for pos in db.scalars(select(Position)).all():
                existing_by_id[int(pos.id)] = pos

        for item in items:
            pos = existing_by_id.get(int(item["id"]))
            if pos:
                pos.name = item["name"]
                pos.category = item.get("category", "国考")
                pos.sub_category = item.get("subCategory")
                pos.description = item.get("description")
                pos.is_three_free = item.get("isThreeFree", False)
                pos.payload = json.dumps(item, ensure_ascii=False)
            else:
                db.add(
                    Position(
                        id=item["id"],
                        name=item["name"],
                        category=item.get("category", "国考"),
                        sub_category=item.get("subCategory"),
                        description=item.get("description"),
                        is_three_free=item.get("isThreeFree", False),
                        payload=json.dumps(item, ensure_ascii=False),
                    )
                )
        db.commit()


def ensure_seed_data() -> None:
    Path(settings.SQLITE_PATH).parent.mkdir(parents=True, exist_ok=True)
    Base.metadata.create_all(bind=engine)
    _seed_auth_data()
    _seed_positions()
