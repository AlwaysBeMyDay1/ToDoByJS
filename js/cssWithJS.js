// 이전 app.js까지 JS로 직접 CSS 수정
//  but! 여기서부터 JS는 html을 수정하고 CSS는 그걸 가져와서 수정 

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // const clickedClass = "active";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    
    //위 아래 똑같은 기능

    h1.classList.toggle("active");
    //toggle 기능 : h1의 classlist에 active가 있는지 확인
    //있으면 없애고, 없으면 추가
}

// function handleTitleClick(){
//     const clickedClass = "active";
//     if(h1.className===clickedClass){
//         h1.className = "";
//     }else{
//         h1.className=clickedClass;
//     }
// }

h1.addEventListener("click", handleTitleClick);