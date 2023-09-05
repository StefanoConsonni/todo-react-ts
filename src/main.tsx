import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global/styles/main.css";
import "./global/styles/queries.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
