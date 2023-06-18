import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { Meme } from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Meme />
  </React.StrictMode>
);
