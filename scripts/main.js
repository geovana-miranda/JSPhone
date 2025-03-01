import { appCalculator } from "../scripts/appCalculator/uiCalculator.js";
import { appConverter } from "../scripts/appConverter/uiConverter.js";
import { appTimer } from "../scripts/appTimer/uiTimer.js";
import { appTodoList } from "../scripts/appTodoList/uiTodoList.js";

const screenApp = document.querySelector(".screen__app");
const screenHome = document.querySelector(".screen__home");
const btnHome = document.querySelector(".btn__home");

//data e hora
const currentHour = document.querySelector(".currentHour");
const currentDate = document.querySelector(".currentDate");

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

function updateTime() {
  const now = new Date();
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  currentHour.textContent = `${now.getHours()}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  currentDate.textContent = `${days[now.getDay()]}, ${now
    .getDate()
    .toString()
    .padStart(2, "0")} de ${months[now.getMonth()]}`;
}

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
