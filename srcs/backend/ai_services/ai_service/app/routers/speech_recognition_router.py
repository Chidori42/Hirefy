import logging
import os
import shutil
import tempfile
from fastapi import APIRouter, Depends, File, HTTPException, Request, UploadFile
from fastapi.concurrency import run_in_threadpool
from jose import JWTError, jwt
from services.speech_recognition.speech_recognate import recognate

router = APIRouter()
logger = logging.getLogger("ai_service.speech_recognition")

# Use correct secret key from env
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

@router.post("/api/ai/recognate")
async def recognition_endpoint(audio: UploadFile = File(...), user=Depends(jwt_verify)):
    """
    Transcribe speech from an audio file.
    """
    temp_file = None
    try:
        logger.info(f"Processing audio recognition for: {audio.filename}")
        
        # Create a secure temporary file
        suffix = os.path.splitext(audio.filename)[1]
        with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as f:
            temp_file = f.name
            shutil.copyfileobj(audio.file, f)

        # Run synchronous speech recognition in a threadpool
        text = await run_in_threadpool(recognate, temp_file)
        
        logger.info(f"Speech recognition completed for {audio.filename}")
        return {"text": text, "status": "success"}

    except Exception as e:
        logger.error(f"Speech recognition failed: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Speech recognition service failed")
    
    finally:
        # Ensure cleanup of temporary file
        if temp_file and os.path.exists(temp_file):
            try:
                os.remove(temp_file)
            except Exception as e:
                logger.error(f"Failed to delete temp file {temp_file}: {str(e)}")
        await audio.close()
