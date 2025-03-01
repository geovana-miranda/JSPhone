import {
  getAvailableCurrencies,
  fetchExchangeRate,
} from "../services/apiConverter.js";

export const coins = await getAvailableCurrencies();

export async function converter(e) {
  e.preventDefault();

  const moneyAmount = document.getElementById("money__amount").value;
  const selectFrom = document.getElementById("coin__from").value;
  const selectTo = document.getElementById("coin__to").value;
  const textResult = document.getElementById("text__result");
  const errorMsg = document.querySelector(".error__msg");

  if (!validateInputs(moneyAmount, selectFrom, selectTo, errorMsg)){
    textResult.textContent = "";
    return;
  }

  const formattedAmount = formatValue(moneyAmount);
  const exchangeRate = await fetchExchangeRate(selectFrom, selectTo);
  const result = (formattedAmount * exchangeRate).toFixed(2);

  displayResult(textResult, formattedAmount, result, selectFrom, selectTo)
}

function validateInputs(moneyAmount, selectFrom, selectTo, errorMsg) {
    if (!moneyAmount) return false;

    if (isNaN(moneyAmount.replace(",", "."))) {
      errorMsg.textContent = "Insira um valor válido";
      errorMsg.classList.remove("hide");
      return false;
    }
  
    if (selectFrom === selectTo) {
      errorMsg.textContent = "As moedas são iguais";
      errorMsg.classList.remove("hide");
      return false;
    }
  
    errorMsg.classList.add("hide");
    return true;
}

function formatValue(moneyAmount) {
    return parseFloat(moneyAmount.replace(",", "."));
}

function displayResult(textResult, formattedAmount, result, selectFrom, selectTo) {
    textResult.textContent = `${formattedAmount
        .toString()
        .replace(".", ",")} ${selectFrom} = ${result
        .toString()
        .replace(".", ",")} ${selectTo}`;
}