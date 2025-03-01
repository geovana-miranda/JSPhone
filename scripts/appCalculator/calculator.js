const operations = ["/", "*", "+", "-"];

export function clickOnButtonNumber(button) {
  const current = document.querySelector(".current__operation");
  const previous = document.querySelector(".previous__operation");

  const lastDigit = previous.textContent.slice(-1);
  const valueOfButton = button.textContent;

  if (
    current.textContent.length === 1 &&
    current.textContent === "0" &&
    valueOfButton === "0"
  ) {
    return;
  }

  if (previous.textContent.includes("/0")) {
    current.textContent = "";
    previous.textContent = "";
  }

  if (valueOfButton === ".") {
    if (current.textContent === "") {
      current.textContent += "0" + valueOfButton;
      return;
    }
    if (current.textContent.includes(".")) return;
  }

  if (lastDigit) {
    if (lastDigit === "=") {
      current.textContent = ""
      previous.textContent = ""
    }
    if (lastDigit === "/" && valueOfButton === "0") {
      previous.textContent += valueOfButton;
      current.textContent = "Não é possivel dividir por 0";
      return;
    }
  }

  current.textContent += valueOfButton;
}

export function clickOnButtonOperation(button) {
  const current = document.querySelector(".current__operation");
  const previous = document.querySelector(".previous__operation");

  const lastDigit = previous.textContent.slice(-1);
  const valueOfButton = button.textContent;
  const isLastDigitOp = operations.includes(lastDigit);
  const isButtonOp = operations.includes(valueOfButton);

  if (!current.textContent && !previous.textContent) return;
  if (previous.textContent.includes("/0") && valueOfButton !== "C") return;

  switch (valueOfButton) {
    case "CE":
      if (lastDigit === "=") return;
      current.textContent = "";
      break;
    case "C":
      current.textContent = "";
      previous.textContent = "";
      break;
    case "DEL":
      if (lastDigit === "=") return;
      current.textContent = current.textContent.slice(0, -1);
      break;
    case "=":
      if (
        !current.textContent ||
        !previous.textContent ||
        previous.textContent.includes("=")
      ) {
        return;
      } else {
        const result = new Function(
          "return " + previous.textContent + current.textContent
        )();
        previous.textContent += current.textContent + "=";
        current.textContent = result;
      }
      break;
  }

  if (isButtonOp) {
    if (isLastDigitOp) {
      if (current.textContent === "") {
        previous.textContent =
          previous.textContent.slice(0, -1) + valueOfButton;
        return;
      } else {
        const result = new Function(
          "return " + previous.textContent + current.textContent
        );

        previous.textContent = result() + valueOfButton;
      }
    } else {
      previous.textContent = current.textContent + valueOfButton;
    }

    current.textContent = "";
  }
}
