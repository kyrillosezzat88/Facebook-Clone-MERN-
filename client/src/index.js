import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

//https://facebook-clone-mern-stack.herokuapp.com/api/v1/
axios.defaults.baseURL =
  "https://facebook-clone-backend-two.vercel.app/api/v1/";
axios.defaults.headers = {
  Authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
