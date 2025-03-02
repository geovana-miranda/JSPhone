import { appCalculator } from "../scripts/appCalculator/uiCalculator.js";
import { appConverter } from "../scripts/appConverter/uiConverter.js";
import { appTimer } from "../scripts/appTimer/uiTimer.js";
import { appTodoList } from "../scripts/appTodoList/uiTodoList.js";
import { updateTime } from "./Time/time.js";

const screenApp = document.querySelector(".screen__app");
const screenHome = document.querySelector(".screen__home");
const btnHome = document.querySelector(".btn__home");

//ícones dos apps
const converterApp = document.getElementById("converter__app");
const todoListApp = document.getElementById("todo_list__app");
const timerApp = document.getElementById("timer__app");
const calculatorApp = document.getElementById("calculator__app");

//telas dos apps
const screenConverter = document.querySelector(".converter");
const screenTodoList = document.querySelector(".todo_list");
const screenTimer = document.querySelector(".timer");
const screenCalculator = document.querySelector(".calculator");

updateTime();

converterApp.addEventListener("click", () =>
  showApp(screenConverter, appConverter)
);

todoListApp.addEventListener("click", () =>
  showApp(screenTodoList, appTodoList)
);

timerApp.addEventListener("click", () => showApp(screenTimer, appTimer));

calculatorApp.addEventListener("click", () =>
  showApp(screenCalculator, appCalculator)
);

btnHome.addEventListener("click", () => {
  [
    screenApp,
    screenConverter,
    screenTodoList,
    screenTimer,
    screenCalculator,
  ].forEach((screen) => screen.classList.add("hide"));
  screenHome.classList.remove("hide");
});

function showApp(appScreen, appFunction) {
  screenHome.classList.add("hide");
  screenApp.classList.remove("hide");

  [screenCalculator, screenConverter, screenTimer, screenTodoList].forEach(
    (screen) => screen.classList.add("hide")
  );
  appScreen.classList.remove("hide");

  appScreen.innerHTML = "";
  appFunction();
}
