import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./network/youtube";

// ⭐⭐⭐ youtube Class를 여기서 만들어줘야 한번만 만들어진다. (App 또는 Componnet 안에서 만들지 않을 것!) ⭐⭐⭐
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
