import logging
import os
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import StreamingResponse
from jose import JWTError, jwt
from limiter.limiter import limiter
from pydantic import BaseModel
from services.generate import generate_async

router = APIRouter()
logger = logging.getLogger("rag_service.router")

class GenerationRequest(BaseModel):
    text: str

SECRET_KEY = os.getenv("ACCESS_TOKEN_SECRET")

def jwt_verify(request: Request):
    token = request.cookies.get("accessToken")
    if token is None:
        raise HTTPException(status_code=401, detail="Missing token")

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload
    except JWTError:
        logger.warning("JWT verification failed")
        raise HTTPException(status_code=401, detail="Invalid token")

@router.post("/api/rag/generate")
@limiter.limit("5/minute")
async def generation_endpoint(
    request: Request, body: GenerationRequest, user=Depends(jwt_verify)
):
    """
    Generate a response using RAG and LLM.
    """
    logger.info(f"RAG generation request from user: {user.get('sub', 'unknown')}")
    
    async def stream_response():
        try:
            async for chunk in generate_async(body.text):
                yield chunk
        except Exception as e:
            logger.error(f"Streaming failed: {str(e)}", exc_info=True)
            # In a streaming response, we can't easily change the status code after starting
            yield "\n[Error: Generation failed]"

    return StreamingResponse(stream_response(), media_type="text/plain")
