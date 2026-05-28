import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Upload from "./Upload.jsx";
import Usercreate from "./User.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UIProvider } from "@yamada-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/create" element={<Usercreate />} />
        </Routes>
      </BrowserRouter>
    </UIProvider>
  </StrictMode>,
);
