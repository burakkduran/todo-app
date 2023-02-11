const container = document.querySelector("ul");
const addTask = document.querySelector(".addTask");
const startAdd = document.querySelector(".startAdd");

const checkItem = () => {
  if (container.childElementCount !== 1) {
    startAdd.classList.add("hidden")
  } else {
    startAdd.classList.remove("hidden")
  }
};

const completeItem = (event) => {
  const child = event.currentTarget;
  const parent = child.parentElement;
  if (child.innerText == "Complete") {
    child.innerText = "To Do";
  } else {
    child.innerText = "Complete";
  }
  parent.classList.toggle("completed");
};

const removeItem = (event) => {
  const parent = event.currentTarget.parentElement;
  parent.remove();
  checkItem();
};

const removeDisplay = () => {
  const inputValue = document.querySelector(".todoInput");
  inputValue.value = "";
  inputValue.focus();
};

const addTodo = (event) => {
  event.preventDefault()
  const inputText = document.querySelector(".todoInput").value;

  if (inputText === "") {
    alert("You need to write something");
  } else {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todoItem");
    container.appendChild(todoItem);

    const completeButton = document.createElement("button");
    completeButton.classList.add("completeButton");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", completeItem);
    todoItem.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", removeItem);
    todoItem.appendChild(deleteButton);

    const todoText = document.createElement("p");
    todoText.classList.add("todoText");
    todoText.innerText = inputText;
    todoItem.appendChild(todoText);
    removeDisplay();
    checkItem();
  }
};

addTask.addEventListener("click", addTodo);
