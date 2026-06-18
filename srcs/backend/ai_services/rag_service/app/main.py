import logging
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from limiter.limiter import limiter
from routers import llm_rag_router
from services.document_index import index_documents
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger("rag_service")

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting RAG Service...")
    try:
        # Index documents on startup
        logger.info("Indexing documents...")
        index_documents()
        logger.info("Documents indexed successfully")
    except Exception as e:
        logger.error(f"Failed to index documents: {str(e)}", exc_info=True)
    yield
    logger.info("Shutting down RAG Service...")

app = FastAPI(title="RAG Service", lifespan=lifespan)

# Config
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.state.limiter = limiter
app.add_middleware(SlowAPIMiddleware)
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

@app.get("/api/rag/health")
async def health_check():
    return {"status": "ok", "service": "RAG Service"}

app.include_router(llm_rag_router.router)
