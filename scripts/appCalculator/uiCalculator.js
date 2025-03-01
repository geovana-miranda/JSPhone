import { clickOnButtonNumber, clickOnButtonOperation } from "./calculator.js";

const calculatorApp = document.querySelector(".calculator");

export function appCalculator() {
  createAppCalculator();
}

function createAppCalculator() {
  const calculatorContainer = document.createElement("div");
  calculatorContainer.classList.add("calculator__container");

  const calculatorOperations = document.createElement("div");
  calculatorOperations.classList.add("calculator__operations");

  const previousOperation = document.createElement("div");
  previousOperation.classList.add("previous__operation");

  const currentOperation = document.createElement("div");
  currentOperation.classList.add("current__operation");

  calculatorOperations.appendChild(previousOperation);
  calculatorOperations.appendChild(currentOperation);

  const calculatorButtons = document.createElement("div");
  calculatorButtons.classList.add("calculator__buttons");

  const btnCE = createButtonOperation("CE");
  const btnC = createButtonOperation("C");
  const btnDEL = createButtonOperation("DEL");
  const btnDivision = createButtonOperation("/");
  const btn7 = createButtonNumber("7");
  const btn8 = createButtonNumber("8");
  const btn9 = createButtonNumber("9");
  const btnMultiplication = createButtonOperation("*");
  const btn4 = createButtonNumber("4");
  const btn5 = createButtonNumber("5");
  const btn6 = createButtonNumber("6");
  const btnSubtraction = createButtonOperation("-");
  const btn1 = createButtonNumber("1");
  const btn2 = createButtonNumber("2");
  const btn3 = createButtonNumber("3");
  const btnAddition = createButtonOperation("+");
  const btn0 = createButtonNumber("0");
  const btnDot = createButtonNumber(".");
  const btnEqual = createButtonOperation("=", "btn__equal");

  calculatorContainer.appendChild(calculatorOperations);
  calculatorContainer.appendChild(calculatorButtons);

  calculatorApp.appendChild(calculatorContainer);

  function createButtonNumber(text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = () => clickOnButtonNumber(button);
    button.classList.add("number");
    calculatorButtons.appendChild(button);

    return button;
  }

  function createButtonOperation(text, className = "") {
    const button = document.createElement("button");
    button.textContent = text;
    if (className) {
      button.classList.add(className);
    }
    button.onclick = () => clickOnButtonOperation(button);
    calculatorButtons.appendChild(button);

    return button;
  }
}

