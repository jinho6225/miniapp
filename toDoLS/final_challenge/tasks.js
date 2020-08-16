const todoForm = document.querySelector(".js-todoForm");
const input = document.querySelector("input");
const todoPending = document.querySelector(".js-pending");
const todoFinished = document.querySelector(".js-finished");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pendingArr = [];
let finishedArr = [];

function deleteTodo(e) {
  const li = e.target.parentNode;
  todoPending.removeChild(li);
  const updatedTodo = pendingArr.filter(function (todo) {
    return todo.id !== Number(li.id);
  });
  pendingArr = updatedTodo;
  saveTodos();
}
function deleteFinishedTodo(e) {
  const li = e.target.parentNode;
  todoFinished.removeChild(li);
  const updatedTodo = finishedArr.filter(function (todo) {
    return todo.id !== li.id;
  });
  finishedArr = updatedTodo;
  saveFinishedTodos();
}
function saveTodos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingArr));
}
function saveFinishedTodos() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArr));
}
function undoTodo(e) {
  deleteFinishedTodo(e);
  const text = e.target.parentNode.children[0].innerText;
  paintToDo(text);
}
function paintFinishedTodo(e) {
  deleteTodo(e);
  const li = document.createElement("li");
  const rmvBtn = document.createElement("button");
  const undoBtn = document.createElement("button");
  const span = document.createElement("span");
  rmvBtn.innerText = "❌";
  undoBtn.innerText = "⬅️";
  rmvBtn.addEventListener("click", deleteFinishedTodo);
  undoBtn.addEventListener("click", undoTodo);
  const text = e.target.parentNode.children[0].innerText;
  const id = e.target.parentNode.id;
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(rmvBtn);
  li.appendChild(undoBtn);
  li.id = id;
  todoFinished.appendChild(li);
  const todoObj = {
    text: text,
    id: id
  };
  finishedArr.push(todoObj);
  saveFinishedTodos();
}
function paintToDo(currentVal) {
  const li = document.createElement("li");
  const rmvBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Math.ceil(Math.floor(new Date()) * Math.random());
  rmvBtn.innerText = "❌";
  checkBtn.innerText = "✅";
  rmvBtn.addEventListener("click", deleteTodo);
  checkBtn.addEventListener("click", paintFinishedTodo);
  span.innerText = currentVal;
  li.appendChild(span);
  li.appendChild(rmvBtn);
  li.appendChild(checkBtn);
  li.id = newId;
  todoPending.appendChild(li);
  const todoObj = {
    text: currentVal,
    id: newId
  };
  pendingArr.push(todoObj);
  saveTodos();
}
function paintToDo2(currentVal) {
  const li = document.createElement("li");
  const rmvBtn = document.createElement("button");
  const undoBtn = document.createElement("button");
  const span = document.createElement("span");
  rmvBtn.innerText = "❌";
  undoBtn.innerText = "⬅️";
  rmvBtn.addEventListener("click", deleteFinishedTodo);
  undoBtn.addEventListener("click", undoTodo);
  const id = currentVal.id;
  span.innerText = currentVal.text;
  li.appendChild(span);
  li.appendChild(rmvBtn);
  li.appendChild(undoBtn);
  li.id = id;
  todoFinished.appendChild(li);
  const todoObj = {
    text: currentVal.text,
    id: currentVal.id
  };
  finishedArr.push(todoObj);
  saveFinishedTodos();
}

function handleSubmit(e) {
  e.preventDefault();
  const curVal = input.value;
  paintToDo(curVal);
  input.value = "";
}
function loadFinishedTodos() {
  const loadFinishedTodos = localStorage.getItem(FINISHED_LS);
  if (loadFinishedTodos !== null) {
    const todoList = JSON.parse(loadFinishedTodos);
    todoList.forEach((el) => {
      paintToDo2(el);
    });
  }
}
function loadTodos() {
  const loadTodos = localStorage.getItem(PENDING_LS);
  if (loadTodos !== null) {
    const todoList = JSON.parse(loadTodos);
    todoList.forEach((el) => {
      paintToDo(el.text);
    });
  }
}
function init() {
  loadTodos();
  loadFinishedTodos();
  todoForm.addEventListener("submit", handleSubmit);
}
init();
