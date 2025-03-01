import {coins, converter} from "./converter.js";

const converterApp = document.querySelector(".converter");

const errorMsg = document.createElement("p");
errorMsg.classList.add("error__msg");
errorMsg.classList.add("hide");

export function appConverter() {
  createAppConverter();
}

function createAppConverter() {
  if (!errorMsg.classList.contains("hide")) {
    errorMsg.classList.add("hide");
  }

  const converterContainer = document.createElement("div");
  converterContainer.classList.add("converter__container");

  const titleApp = document.createElement("h3");
  titleApp.textContent = "MoedaFlex";

  const converterForm = document.createElement("form");
  converterForm.classList.add("converter__form");

  const labelValue = document.createElement("label");
  labelValue.classList.add("form__value");

  const spanValue = document.createElement("span");
  spanValue.textContent = "Valor:";

  const inputValue = document.createElement("input");
  inputValue.id = "money__amount";

  labelValue.appendChild(spanValue);
  labelValue.appendChild(inputValue);

  const labelFrom = document.createElement("label");
  labelFrom.classList.add("form__from");

  const spanFrom = document.createElement("span");
  spanFrom.textContent = "De:";

  const selectFrom = document.createElement("select");
  selectFrom.id = "coin__from";

  coins.forEach((coin) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = coin;
    optionFrom.textContent = coin;

    if (coin === "BRL") optionFrom.selected = true;
    selectFrom.appendChild(optionFrom);
  });

  labelFrom.appendChild(spanFrom);
  labelFrom.appendChild(selectFrom);

  const labelTo = document.createElement("label");
  labelTo.classList.add("form__to");

  const spanTo = document.createElement("span");
  spanTo.textContent = "Para:";

  const selectTo = document.createElement("select");
  selectTo.id = "coin__to";

  coins.forEach((coin) => {
    const optionTo = document.createElement("option");
    optionTo.value = coin;
    optionTo.textContent = coin;
    selectTo.appendChild(optionTo);
  });

  labelTo.appendChild(spanTo);
  labelTo.appendChild(selectTo);

  const btnConverter = document.createElement("button");
  btnConverter.classList.add("btn__converter");
  btnConverter.textContent = "Converter";
  btnConverter.onclick = converter;

  const textResult = document.createElement("p");
  textResult.classList.add("text__result");
  textResult.id = "text__result";

  converterForm.append(
    labelValue,
    labelFrom,
    labelTo,
    btnConverter,
    textResult
  );
  converterContainer.appendChild(titleApp);
  converterContainer.appendChild(errorMsg);
  converterContainer.appendChild(converterForm);
  converterApp.appendChild(converterContainer);
}
