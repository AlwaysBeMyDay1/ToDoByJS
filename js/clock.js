const clock = document.querySelector("h2#clock");

function getClocking(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //get~ 하면 정수값을 가져오므로 padstart함수를 못 씀. 즉 형변형
    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}

getClocking();
setInterval(getClocking, 1000);








// function sayHelloPerSecond(){
//     console.log("Hello");
// }
// setInterval(sayHelloPerSecond, 3000);
// //3초마다 좌측의 함수 실행
// setTimeout(sayHelloPerSecond, 3000);
// //3초 뒤에 좌측의 함수 실행