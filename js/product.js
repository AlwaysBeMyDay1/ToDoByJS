//events
// code by me
// ----------------------------------------------------------
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input")
const greetingTitle = document.querySelector("#greeting");

const userName = localStorage.getItem('username');

const HIDDEN_CLASSNAME = "hidden";

function loginSubmit(event){
    // event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem('username', username);
    greetingTitle.classList.remove(HIDDEN_CLASSNAME);
    greetingTitle.innerHTML = `Hello ${username}`;
}

if(userName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    window.addEventListener("submit", loginSubmit);
}else{
    greetingTitle.classList.remove(HIDDEN_CLASSNAME);
    greetingTitle.innerHTML = `Hello ${userName}`;
}



// code by NICOLAS
// ----------------------------------------------------------
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   paintGreetings(savedUsername);
// }






// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// function ButtonClicked(){
//     const userName = loginInput.value;
//     if(userName!==""){
//         alert("Your name is "+userName);
//         console.dir(loginInput.value);
//         console.log(typeof loginInput.value);
//     }else{
//         alert("Input your name!!");
//         console.dir(loginInput.value);
//         console.log(typeof loginInput.value);
//     }
// }
// loginButton.addEventListener("click", ButtonClicked);

//위 코드로 수행한 기능은 html 태그에 required maxlength 속성 추가함으로써 구현 가능
//즉, 굳이 저렇게 안 해도 됨 form 태그 추가하고 그 안에 input 넣으면 됨
//input을 form에 넣으면 우리가 엔터를 치면 form은 자동적으로 submit 됨! ※주의!!※