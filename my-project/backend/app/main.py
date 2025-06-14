from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import example_router  # Import your routers here

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this as needed for your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(example_router)  # Include your routers here

@app.get("/")
async def read_root():
    return {"message": "Welcome to the FastAPI application!"}