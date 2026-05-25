import "./App.css";
import { Feeling1 } from "./components/feeling1";
import { Feeling2 } from "./components/feeling2";
import { Feeling3 } from "./components/feeling3";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState();
  const [feel1, setFeel1] = useState("");
  const [feel2, setFeel2] = useState("");
  const [feel3, setFeel3] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      <div className="App">Message from the backend: {message}</div>;
      <div className="feels">
        <Feeling1 feel1={feel1} setFeel1={setFeel1} />
        <Feeling2 feel2={feel2} setFeel2={setFeel2} />
        <Feeling3 feel3={feel3} setFeel3={setFeel3} />
      </div>
    </>
  );
}

export default App;
