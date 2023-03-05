const toDo = document.querySelector("#todo");
const toDoLeverage = document.querySelector("#todo-leverage");
const toDoLayer = document.querySelector("#todo-layer");
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const limitMessage = document.querySelector("#limit-message");
let savedToDoList = [];
const TODO_KEY = "todo"

function paintToDo(newToDoObj) {
    const newList = document.createElement("li");
    const newToDo = document.createElement("span");
    newList.id = newToDoObj.id;
    newToDo.innerText = newToDoObj.text;
    const newToDodeleteBtn = document.createElement("button");
    newToDodeleteBtn.innerText = "❌";
    newList.append(newToDo);
    newList.append(newToDodeleteBtn);
    toDoList.append(newList);

    newToDodeleteBtn.addEventListener("click", deleteToDo);
}

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(savedToDoList));
}

function deleteToDo(event) {
    const toDoListToDelete = event.target.parentElement;
    toDoListToDelete.remove();
    savedToDoList = savedToDoList.filter(toDoObj => toDoObj.id != parseInt(toDoListToDelete.id));
    saveToDo();
}

function handleToDoSubmit(event) {
    event.preventDefault();

    if (toDoList.querySelectorAll("li").length < 5) {
        limitMessage.classList.add(HIDDEN_CLASSNAME);

        const toDoInput = document.querySelector("#todo-input")
        const newToDoObj = {
            id: Date.now(),
            text: toDoInput.value
        }
        toDoInput.value = "";
        paintToDo(newToDoObj);
        savedToDoList.push(newToDoObj);
        saveToDo();
    } else {
        limitMessage.innerText = "최대 5개까지 만들 수 있습니다."
        limitMessage.classList.remove(HIDDEN_CLASSNAME);
    }
}

function handleToDoLeverageClick() {
    toDoLayer.classList.toggle(HIDDEN_CLASSNAME);
}

function initToDo() {
    const savedToDo = localStorage.getItem(TODO_KEY);
    if (savedToDo != null) {
        savedToDoList = JSON.parse(savedToDo);
        savedToDoList.forEach(paintToDo);
    }
}

initToDo();
toDoForm.addEventListener("submit", handleToDoSubmit);
toDoLeverage.addEventListener("click", handleToDoLeverageClick);
