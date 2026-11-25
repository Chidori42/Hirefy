import logging
from fastapi import APIRouter, File, HTTPException, UploadFile
from fastapi.concurrency import run_in_threadpool
from services.profile_classifier.img_recog import predict

router = APIRouter()
logger = logging.getLogger("ai_service.img_classf")

@router.post("/api/ai/classify")
async def classify_image(file: UploadFile = File(...)):
    """
    Classify profile image as valid or non-valid.
    """
    labels = ["non valid profile", "valid profile"]

    if not file.content_type.startswith("image/"):
        logger.warning(f"Invalid file type: {file.content_type}")
        raise HTTPException(status_code=400, detail="File must be an image")

    try:
        logger.info(f"Classifying image: {file.filename}")
        image_bytes = await file.read()
        
        # Run synchronous ML prediction in a threadpool to avoid blocking the event loop
        result = await run_in_threadpool(predict, image_bytes)

        logger.info(f"Classification result for {file.filename}: {labels[result]}")
        return {"class": labels[result], "status": "success"}

    except Exception as e:
        logger.error(f"Image recognition failed: {str(e)}", exc_info=True)
        raise HTTPException(status_code=500, detail="Image recognition service failed")
    finally:
        await file.close()
