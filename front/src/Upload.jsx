import "./Upload.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [status, setStatus] = useState("stay");
  const [inputValue, setInput] = useState("");

  //   useEffect(() => {
  //     async function uploadData() {
  //       const response = await fetch("http://localhost:3000/upload", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ text: inputValue }),
  //       });
  //     }
  //     if (isFirst.current === true) {
  //       uploadData();
  //     }

  //     isFirst.current = true;
  //   }, [status]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    async function uploadData() {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ run_distance: inputValue }),
      });
    }

    uploadData();
  };

  return (
    <>
      <form className="uploadform" onSubmit={handleSubmit}>
        <h1>走行距離入力フォーム</h1>
        <input
          type="number"
          id="distance-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button id="distance-button" onClick={() => setStatus("submit")}>
          送信する
        </button>
      </form>
    </>
  );
}

export default App;
