import os
from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    APP_NAME: str = "AI Service"
    FRONTEND_URL: str = "http://localhost:8080"
    ALLOWED_ORIGINS: List[str] = ["http://localhost:8080", "http://localhost:5173"]
    
    # ML Models paths
    PROFILE_MODEL_PATH: str = "services/profile_classifier/profile_classf_model.weights.h5"
    
    class Config:
        env_file = ".env"
        extra = "ignore"

settings = Settings()
