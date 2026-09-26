import { useState } from "react";
import "./App.css";

function App() {
    const [question, setQuestion] = useState(""); // 사용자가 입력한 질문
    const [answer, setAnswer] = useState(""); // 백엔드에서 받은 답변

    // 질문하기 버튼을 눌렀을 때 실행
    const askQuestion = async () => {
        // 질문이 비어 있으면 요청하지 않음
        if (!question.trim()) {
            return;
        }

        const response = await fetch("http://localhost:8000/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: question,
            }),
        });

        const data = await response.json();

        // 백엔드에서 받아온 답변을 answer 상태에 저장
        setAnswer(data.answer);
    };

    // 추천 질문을 클릭하면 입력창에 넣어줌
    const selectQuestion = (text: string) => {
        setQuestion(text);
    };

  return (
    <div className="app">
        <div className="container">

            {/* 상단 제목 */}
            <header className="header">
                <h1>개발 문서 Q&amp;A</h1>
            </header>

            {/* 기술 카테고리 */}
            <nav className="tech-tabs">
                <button className="tech-tab active">React</button>
                <button className="tech-tab">FastAPI</button>
                <button className="tech-tab">Django</button>
            </nav>

            {/* 질문 입력 영역 */}
            <section className="search-section">
                <div className="search-box">
                    <input
                    type="text"
                    placeholder="질문을 입력하세요"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                        askQuestion();
                        }
                    }}
                    />

                    <button className="search-button" onClick={askQuestion}>
                    검색
                    </button>
                </div>
            </section>

            {/* 추천 질문 */}
            <section className="recommend-section">
                <h2>추천 질문</h2>

                <div className="question-list">
                    <button
                    className="question-card"
                    onClick={() =>
                        selectQuestion("FastAPI에서 Depends가 뭐야?")
                    }
                    >
                    FastAPI에서 Depends가 뭐야?
                    </button>

                    <button
                    className="question-card"
                    onClick={() =>
                        selectQuestion("React에서 useState는 언제 사용해?")
                    }
                    >
                    React에서 useState는 언제 사용해?
                    </button>

                    <button
                    className="question-card"
                    onClick={() =>
                        selectQuestion("FastAPI에서 CORS는 왜 필요한가?")
                    }
                    >
                    FastAPI에서 CORS는 왜 필요한가?
                    </button>

                    <button
                    className="question-card"
                    onClick={() =>
                        selectQuestion("Pydantic의 BaseModel은 뭐야?")
                    }
                    >
                    Pydantic의 BaseModel은 뭐야?
                    </button>

                    <button
                    className="question-card"
                    onClick={() =>
                        selectQuestion("React의 useEffect는 언제 사용해?")
                    }
                    >
                    React의 useEffect는 언제 사용해?
                    </button>

                    <button
                    className="question-card"
                    onClick={() =>
                        selectQuestion("FastAPI와 Django의 차이는 뭐야?")
                    }
                    >
                    FastAPI와 Django의 차이는 뭐야?
                    </button>

                </div>
                </section>

                {/* 답변 영역 */}
                <section className="answer-section">
                <div className="answer-header">
                    <h2>답변</h2>
                </div>

                <div className="answer-box">
                    {answer ? (
                    <p>{answer}</p>
                    ) : (
                    <div className="empty-answer">
                        <span>질문을 입력하고 검색해보세요.</span>
                    </div>
                    )}
                </div>
            </section>

            {/* 하단 */}
            <footer>
                DevDocs AI
            </footer>

      </div>
    </div>
  );
}

export default App;