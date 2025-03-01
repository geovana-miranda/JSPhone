import { AddItem, deleteItem, isDone, items } from "./todoList.js";

const todoListApp = document.querySelector(".todo_list");

const emptyMsg = document.createElement("p");
emptyMsg.textContent = "Sua lista está vazia.";
const errorMsg = document.createElement("P");
errorMsg.textContent = "Você já adicionou essa tarefa";
errorMsg.classList.add("error__msg");
errorMsg.classList.add("hide");

export function appTodoList() {
  createAppTodoList();
}

function createAppTodoList() {
  if (!errorMsg.classList.contains("hide")) {
    errorMsg.classList.add("hide");
  }

  const todoListContainer = document.createElement("div");
  todoListContainer.classList.add("todo_list__container");

  const titleApp = document.createElement("h3");
  titleApp.textContent = "Tarefas+";

  const todoListForm = document.createElement("form");
  todoListForm.classList.add("todo_list__form");

  const inputItem = document.createElement("input");
  inputItem.id = "new__item";
  inputItem.placeholder = "Novo item";

  const btnTodoList = document.createElement("button");
  btnTodoList.classList.add("btn__todo_list");
  btnTodoList.textContent = "+";
  btnTodoList.onclick = (e) => AddItem(e);

  todoListForm.appendChild(inputItem);
  todoListForm.appendChild(btnTodoList);

  const list = document.createElement("div");
  list.classList.add("list");

  const titleList = document.createElement("h4");
  titleList.textContent = "TO-DO";

  const todoList = document.createElement("ul");
  todoList.classList.add("todo");

  list.appendChild(titleList);
  list.appendChild(todoList);

  todoListContainer.appendChild(titleApp);
  todoListContainer.appendChild(errorMsg);
  todoListContainer.appendChild(todoListForm);
  todoListContainer.appendChild(list);

  const listDone = document.createElement("div");
  listDone.id = "list__done";
  listDone.classList.add("list");
  listDone.classList.add("hide");

  const titleListDone = document.createElement("h4");
  titleListDone.textContent = "DONE";

  const doneList = document.createElement("ul");
  doneList.classList.add("done");

  listDone.appendChild(titleListDone);
  listDone.appendChild(doneList);
  todoListContainer.appendChild(listDone);

  todoListApp.appendChild(todoListContainer);

  updateLists();
}

function isTodoListEmpty() {
  if (items.find((item) => item.done === false)) {
    emptyMsg.classList.add("hide");
  } else {
    emptyMsg.classList.remove("hide");
  }
}

function isDoneListEmpty() {
  return !items.some((item) => item.done === true);
}

export function updateLists() {
  const todoList = document.querySelector(".todo");
  const doneList = document.querySelector(".done");

  const listDone = document.getElementById("list__done");

  doneList.innerHTML = "";
  todoList.innerHTML = "";

  todoList.appendChild(emptyMsg);

  isTodoListEmpty();

  if (isDoneListEmpty()) {
    listDone.classList.add("hide");
  } else {
    listDone.classList.remove("hide");
  }

  items.forEach((item, index) => {
    const listItem = createTaskItem(item, index);
    (item.done ? doneList : todoList).appendChild(listItem);
  });
}

function createTaskItem(item, index) {
  const listItem = document.createElement("li");
  listItem.classList.add(item.done ? "done__item" : "todo__item");

  const title = document.createElement("div");
  title.classList.add(item.done ? "done__title" : "todo__title");

  const checkboxItem = document.createElement("input");
  checkboxItem.type = "checkbox";
  checkboxItem.checked = item.done;

  const titleItem = document.createElement("p");
  titleItem.textContent = item.item;

  checkboxItem.onclick = () => isDone(item);
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid");
  deleteIcon.classList.add("fa-trash");
  deleteIcon.classList.add("delete__icon");

  deleteIcon.onclick = () => deleteItem(index);
  listItem.appendChild(title);
  listItem.appendChild(deleteIcon);
  title.appendChild(checkboxItem);
  title.appendChild(titleItem);

  return listItem;
}