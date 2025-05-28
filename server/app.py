import logging
from typing import Annotated, Any
from fastapi import Depends, FastAPI
from pydantic import BaseModel, ValidationError
import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from databricks.sdk import WorkspaceClient
from databricks.sdk.service.serving import (
    ChatMessage,
    ChatMessageRole,
)
from dotenv import load_dotenv

# Set up logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)
logger.info("Logger initialized successfully!")

load_dotenv()



app = FastAPI()
ui_app = StaticFiles(directory="client/dist", html=True)
api_app = FastAPI()


# Endpoint simples adicionado à sub-aplicação de API
@api_app.get("/hello")
def read_hello():
    return {"message": "Hello, World!"}



# PLEASE NOTE THE ORDER OF THE MOUNTS MATTERS
app.mount("/", ui_app)
app.mount("/api", api_app)

origins = [
    "http://localhost:3000",
]



# client
def client():
    return WorkspaceClient()

