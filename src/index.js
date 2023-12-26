import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppXY from "./AppXY";

// 리액트에서 시작 포인터가 되는 부분
// root라는 id를 요소를 가져와서 거기에 루트를 만들어줌

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 개발할 때는 StrictMode에서 조금더 엄격하게 개발할 수 있도록 하고, 배포할 때는 이 모드가 자동으로 꺼짐
  <React.StrictMode>
    <AppXY />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
