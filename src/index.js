import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // 배포 위해서 Router url 처리, 안하면 ERROR 남
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
