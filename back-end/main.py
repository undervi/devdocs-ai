from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Hello FastAPI"
    }

@app.post("/ask")
def ask():
    return {
        "answer": "FastAPI는 Python 기반 웹 프레임워크입니다."
    }