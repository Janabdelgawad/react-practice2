import React from "react";
import ReactDOM from "react-dom";

const name = "Jana";
const luckyNum = "8";
ReactDOM.render(
  <div>
    <h1>Hello {name} !</h1>
    <p>Your Lucky Number is {luckyNum} .</p>
  </div>,
  document.getElementById("root")
);
