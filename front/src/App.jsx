import { Button } from "@yamada-ui/react";
import "./App.css";
import { Feeling1 } from "./components/feeling1";
import { Feeling2 } from "./components/feeling2";
import { Feeling3 } from "./components/feeling3";
import SelectUsers from "./components/select";
import Header from "./components/header";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function App() {
  const [distance, setDistance] = useState("0");
  const [feel1, setFeel1] = useState("");
  const [feel2, setFeel2] = useState("");
  const [feel3, setFeel3] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (!userId) {
      return;
    }
    async function loadData() {
      const response = await fetch(`http://localhost:3000/?user_id=${userId}`);
      const data = await response.json();
      if (data[0].distance === null) {
        setDistance("0");
      } else {
        setDistance(data[0].distance);
        console.log(data[0].distance);
      }
    }
    loadData();
  }, [userId]);

  return (
    <>
      <Header />
      <div className="runupload">
        <SelectUsers userId={userId} setUserId={setUserId} />
        <p className="rundis">今月の総走行距離</p>
        <p className="rundis">{distance}km</p>
      </div>
      <h3 className="runfeels">今後三日間の走りやすさ</h3>
      <div className="feels">
        <Feeling1 feel1={feel1} setFeel1={setFeel1} />
        <Feeling2 feel2={feel2} setFeel2={setFeel2} />
        <Feeling3 feel3={feel3} setFeel3={setFeel3} />
      </div>
    </>
  );
}

export default App;
