from fastapi import APIRouter

from app.modules.auth.routes import router as auth_router
from app.modules.mini.routes import router as mini_router
from app.modules.system.routes import router as system_router
from app.modules.semantic.routes import admin_router as semantic_admin_router
from app.modules.semantic.routes import mini_router as semantic_mini_router
from app.modules.question_bank.routes import admin_router as question_admin_router
from app.modules.question_bank.routes import mini_router as question_mini_router
from app.modules.student_profiles.routes import admin_router as student_admin_router
from app.modules.student_profiles.routes import mini_router as student_mini_router
from app.modules.position_admin.routes import router as position_admin_router
from app.modules.favorite_positions.routes import mini_router as favorite_mini_router

api_router = APIRouter()
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(system_router, prefix="/admin", tags=["admin"])
api_router.include_router(mini_router, prefix="/mini", tags=["mini"])
api_router.include_router(semantic_admin_router, prefix="/admin", tags=["admin"])
api_router.include_router(semantic_mini_router, prefix="/mini", tags=["mini"])
api_router.include_router(question_admin_router, prefix="/admin", tags=["question-bank"])
api_router.include_router(question_mini_router, prefix="/mini", tags=["question-bank"])
api_router.include_router(student_admin_router, prefix="/admin", tags=["student-profiles"])
api_router.include_router(student_mini_router, prefix="/mini", tags=["student-profiles"])
api_router.include_router(position_admin_router, prefix="/admin", tags=["position-admin"])
api_router.include_router(favorite_mini_router, prefix="/mini", tags=["favorite-positions"])
