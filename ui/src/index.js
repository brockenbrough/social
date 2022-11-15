import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./components/comments/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
// Test Change

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);
