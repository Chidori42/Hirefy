import logging
from fastapi import APIRouter, HTTPException
from fastapi.concurrency import run_in_threadpool
from pydantic import BaseModel
from services.chat_moderation.main import moderate

router = APIRouter()
logger = logging.getLogger("ai_service.text_moderation")

class ModerationRequest(BaseModel):
    text: str

@router.post("/api/ai/moderate")
async def moderation_endpoint(request: ModerationRequest):
    """
    Moderate text content for inappropriate material.
    """
    try:
        logger.info("Moderating text content")
        # Run synchronous moderation in a threadpool
        result = await run_in_threadpool(moderate, request.text)

        warn_labels = []
        block_labels = []
        for label, score in result.items():
            if 0.25 <= score < 0.4:
                warn_labels.append(label)
            elif score >= 0.4:
                block_labels.append(label)

        if block_labels:
            logger.info(f"Moderation result: BLOCK - Reasons: {block_labels}")
            return {"action": "Block", "reason": block_labels, "status": "success"}
        elif warn_labels:
            logger.info(f"Moderation result: WARN - Reasons: {warn_labels}")
            return {"action": "Warn", "reason": warn_labels, "status": "success"}
        else:
            return {"action": "Allow", "status": "success"}

    except Exception as e:
        logger.error(f"Text moderation failed: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Chat moderation service failed")
