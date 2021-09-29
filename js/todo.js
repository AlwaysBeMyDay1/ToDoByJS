const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); 

const toDos = [];
const TODOS_KEY = "toDoInput";

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deletBtn = document.createElement("button");
    span.innerText = newToDo;
    deletBtn.innerText = "❌";
    deletBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(deletBtn);
    toDoList.appendChild(li);

}

function toDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDo();
}

toDoForm.addEventListener("submit", toDoSubmit);


const savedToDos = JSON.parse( localStorage.getItem(TODOS_KEY));

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach();
}