import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ast from "./ast";
import ast2 from "./ast/index2";
ast();
ast2();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
