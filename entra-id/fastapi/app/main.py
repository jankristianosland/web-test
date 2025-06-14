###
# Created by Jan Kristian Osland @ Sicra AS 2025
###

from fastapi import FastAPI, Response
from pydantic import BaseModel, Field, field_validator  # type: ignore


###
#
# API endpoints
#
###

# Define the FastAPI app
app = FastAPI()


# Health check endpoint
@app.get("/health")
async def health_check():
    # Log the health check request
    # logger.info("Received GET request for /health")

    # Return a simple health check response
    return {"status": "ok", "message": "Vending API is running"}


# Mount the FastAPI app root path
app.mount("/api", app)
