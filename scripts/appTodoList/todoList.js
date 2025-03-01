import { updateLists } from "./uiTodoList.js";

const storedItems = localStorage.getItem("itens");

export let items = JSON.parse(storedItems) || [];

export function AddItem(e) {
  e.preventDefault();

  const inputItem = document.getElementById("new__item");

  const item = inputItem.value.trim();

  if (!validateItem(item)) return;

  items.push({ item: item, done: false });

  updateLocalStorage();
  inputItem.value = "";
  updateLists();
}

function validateItem(item) {
  const errorMsg = document.querySelector(".error__msg");

  if (!item) return false;

  if (items.find((i) => i.item.toLowerCase() === item.toLowerCase())) {
    errorMsg.classList.remove("hide");
    return false;
  } else {
    errorMsg.classList.add("hide");
    return true;
  }
}

export function deleteItem(index) {
  items.splice(index, 1);
  updateLocalStorage();
  updateLists();
}

export function isDone(item) {
  item.done = !item.done;
  updateLocalStorage();
  updateLists();
}

export function updateLocalStorage() {
  localStorage.setItem("itens", JSON.stringify(items));
}
