import { useState } from "react";
import "./App.css";

function App() {
    const [question, setQuestion] = useState(""); // 사용자가 입력한 질문
    const [answer, setAnswer] = useState(""); // 백엔드에서 받은 답변

    const askQuestion = async () => { // 질문하기 버튼을 눌렀을 때 실행
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

    return (
    <div>
        <h1>DevDocs AI</h1>

        <p>개발 문서에 대해 질문해보세요.</p>

        <input
            type="text"
            placeholder="예: FastAPI에서 Depends가 뭐야?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={askQuestion}>질문하기</button>

        <h2>답변</h2>

        <p>{answer}</p>
    </div>
    );
}

export default App;