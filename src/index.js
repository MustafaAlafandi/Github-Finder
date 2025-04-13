import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GithubContextProvider from "./context/github/github";
import AlertProvider from "./context/alert/alert";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider>
    <GithubContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GithubContextProvider>
  </AlertProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
