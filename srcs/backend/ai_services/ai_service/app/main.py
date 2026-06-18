import logging
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger("ai_service")

# Minimal config handling to avoid dependency issues
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")
APP_NAME = os.getenv("APP_NAME", "AI Service")

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info(f"Starting {APP_NAME}...")
    yield
    logger.info(f"Shutting down {APP_NAME}...")

app = FastAPI(title=APP_NAME, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from routers import img_classf_router, speech_recognition_router, text_moderation_router

@app.get("/api/ai/health")
async def health_check():
    return {"status": "ok", "service": APP_NAME}

app.include_router(img_classf_router.router)
app.include_router(text_moderation_router.router)
app.include_router(speech_recognition_router.router)
