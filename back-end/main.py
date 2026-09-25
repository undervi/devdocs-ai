# 패키지 및 라이브러리
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# FastAPI 앱 생성
app = FastAPI()

# React에서 보내는 요청을 허용하기 위한 CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# React에서 받을 질문 데이터의 형식을 정의
class Question(BaseModel):
    question: str

# /ask
@app.post("/ask")
def ask(data: Question):
    print("사용자 질문:", data.question)

    return {
        "answer": f"'{data.question}'에 대한 답변을 준비 중입니다."
    }