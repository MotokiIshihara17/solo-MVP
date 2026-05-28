import "./Upload.css";
import { useEffect, useState, useRef } from "react";
import { Button, Input, Text } from "@yamada-ui/react";
import InputRun from "./components/inputRun";
import SelectUsers from "./components/select";
import Header from "./components/header";

function Upload() {
  const [inputValue, setInput] = useState("");
  const [date, setDate] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    console.log(date);
    console.log("useridです", userId);
    async function uploadData() {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          run_distance: inputValue,
          run_date: date,
        }),
      });
    }
    window.location.href = "/";

    uploadData();
  };

  return (
    <>
      <Header />
      <form className="uploadform" onSubmit={handleSubmit}>
        <Text
          w="full"
          fontSize={40}
          fontWeight="bold"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          走行距離入力フォーム
        </Text>
        <SelectUsers userId={userId} setUserId={setUserId} />
        <InputRun
          inputValue={inputValue}
          date={date}
          setDate={setDate}
          setInput={setInput}
        />
        <Button id="distance-button" type="submit">
          送信する
        </Button>
        <Button
          id="backButton"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ホーム画面に戻る
        </Button>
      </form>
    </>
  );
}

export default Upload;
