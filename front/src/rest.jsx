// import { useState, useEffect } from "react";
// import { Button } from "@yamada-ui/react";
// import Header from "./components/header";

// function Rest() {
//   useEffect(() => {
//     async function restData() {
//       const response = await fetch("http://localhost:3000");
//       const data = await response.json();
//       console.log(data[0].distance);
//     }
//   }, []);

//   return (
//     <>
//       <Header />
//       <h1>休憩時間</h1>
//       <Button
//         id="backButton"
//         onClick={() => {
//           window.location.href = "/";
//         }}
//       >
//         ホーム画面に戻る
//       </Button>
//     </>
//   );
// }

// export default Rest;
