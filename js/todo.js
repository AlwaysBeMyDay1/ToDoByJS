const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); 

let toDos = [];
const TODOS_KEY = "toDoInput";

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id)); 
    saveToDo();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id=newToDo.id;
    const span = document.createElement("span");
    const deletBtn = document.createElement("button");
    span.innerText = newToDo.text;
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
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    //localstorage에 parsed된 투두리스트 추가해서 빈 배열로 출발하지 않게함
    parsedToDos.forEach(paintToDo);
}


//arrow function
//parsedToDos.forEach((item)=>console.log("this is the turn of ", item))
//=
//function sayHello(item){
//     console.log("this is the turn of ", item);
// }
// parsedToDos.forEach(sayHello);



//JSON.stringify([1,2,3,4]) => "[1,2,3,4]" 문자열로 바뀜
//JSON.parse("[1,2,3,4]") => [1,2,3,4] array로 바뀜