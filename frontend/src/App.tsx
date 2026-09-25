function App() {
  const askServer = async () => {
    const response = await fetch("http://localhost:8000/ask", {
      method: "POST"
    });

    const data = await response.json();

    console.log(data.answer);
  };

  return (
    <button onClick={askServer}>
      질문하기
    </button>
  );
}

export default App;