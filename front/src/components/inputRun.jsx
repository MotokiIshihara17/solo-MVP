import "../Upload.css";
import { useEffect, useState, useRef } from "react";
import { Button, Input, Text } from "@yamada-ui/react";

function InputRun({ inputValue, date, setInput, setDate }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  return (
    <>
      <Input
        type="number"
        id="distance-input"
        value={inputValue}
        onChange={handleChange}
        required
      />
      <Input
        placeholder="Select Date and Time"
        type="date"
        id="distance-input"
        value={date}
        onChange={handleChangeDate}
        required
      />
    </>
  );
}

export default InputRun;
