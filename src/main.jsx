import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Style
import "./assets/style/index.css";

// Pages
import LogIn from "./pages/LogIn";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
