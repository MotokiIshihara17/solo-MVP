import "./User.css";
import { useEffect, useState, useRef } from "react";
import { Text, Input, Button } from "@yamada-ui/react";
import Header from "./components/header";

function Usercreate() {
  const [status, setStatus] = useState("stay");
  const [inputValue, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    async function uploadData() {
      console.log(inputValue);
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_name: inputValue }),
      });
    }
    window.location.href = "/";

    uploadData();
  };

  return (
    <>
      <Header />
      <form className="userform" onSubmit={handleSubmit}>
        <Text
          w="full"
          fontSize={40}
          fontWeight="bold"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          ユーザー登録フォーム
        </Text>
        <Input
          type="text"
          id="user-input"
          value={inputValue}
          onChange={handleChange}
          required
        />

        <Button id="user-button" type="submit">
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

export default Usercreate;
