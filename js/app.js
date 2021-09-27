const title = document.getElementById("title");
//document : js 관점의 html
// html에서 id를 추가했고 이 문장에서 gEBI 함수(이는 document의 함수)로 그 id를 가져옴.

console.log(title);
console.log(title.id);
console.log(title.className);
console.dir(title);

title.innerText="Got you!";
//html 파일 변경 않고도 js로 html 수정 가능

const getElement = document.getElementsByClassName("hi");
//getElementBy~~ : element들을 array 형태로 출력
const query= document.querySelector(".hi h1:first-child");
//querySelector : css selector 사용

console.log(getElement);
console.log(query);


const getElementTitle = document.getElementById("title");
//위와 아래 같은 결과 출력
const queryTitle= document.querySelector("#title");

console.log(getElementTitle);
console.log(queryTitle);

title.style.color = "blue";
title.style.cursor="pointer";
function handleTitleClick(){
    const titleColor = title.style.color;
    let newColor;
    if(titleColor==="tomato"){
        newColor="tomato";
    }else{
        newColor="tomato";
    }
    title.style.color=newColor;
}

//event : 구글에 찾고 싶은 element의 이름과 mdn에 검색을 검색 ex.h1 html element mdn
//web api : js관점의 html element
// 위 방식 또는 console.dir 에서 on 뒤에 붙은 것들은 전부 event
title.addEventListener("click", handleTitleClick);
//()가 있으면 JS는 함수가 시작되는 것으로 인식 즉, 함수 뒤에 ()달지 말것
// 만약 "click" event를 listen하면 JS가 자동으로 함수 뒤에 ()를 달아 함수 실행함.!!

function handleMouseEnter(){
    title.innerText="Mouse is here!"
}

function handleMouseGone(){
    title.innerText="Mouse is gone!"
}

title.onmouseenter = handleMouseEnter();
// 위아래 같은 기능 
// but! addEvent~로 하면 나중에 removeEvent~ 가능 즉, 더 나을 수 있음
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseGone);



function handleCopy(){
    alert("저작권 조심!!");
}

function handleWindowResize(){
    document.body.style.background="tomato";
}

function handleOnline(){
    alert("와이파이 온!!");
}

function handleOffline(){
    alert("와이파이가 꺼졌습니다!! I'm Warning U !!");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleCopy);
window.addEventListener("online",handleOnline);
window.addEventListener("offline",handleOffline);