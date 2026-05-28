import { useEffect, useState, useMemo } from "react";
import { NativeSelect } from "@yamada-ui/react";

function SelectUsers({ userId, setUserId }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function user() {
      const response = await fetch("http://localhost:3000/user");
      const jsonData = await response.json();
      setData(jsonData);
    }
    user();
  }, []);

  const items = useMemo(() => {
    if (!data) return [];

    return data.map((user) => ({
      label: user.user_name,
      value: String(user.id),
    }));
  }, [data]);

  return (
    <div style={{ margin: "0px 100px" }}>
      <select
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "28px",
          color: "blueviolet",
          textAlign: "center",
        }}
      >
        <option value="">ユーザーを選択してください</option>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectUsers;
