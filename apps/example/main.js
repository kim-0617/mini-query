import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { $ } from "@sh-kim/mini-query";

console.log("Hello", $);

document.querySelector("#app").innerHTML = `
  <div>
    <a target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

console.log("number of a tags", $("a").length());

$("a").click(() => {
  console.log("a is clicked");
});
