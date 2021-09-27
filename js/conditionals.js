const age=prompt("How old are you?");

console.log(age);

if(isNaN(age) || age<0){
    console.log("양수를 입력해주세요.");
}else if(age<20){
    console.log("아직 술을 마실 수 없어요.");
}else if(20<=age && age<60){
    console.log("술을 마실 수 있어요.");
}else{
    console.log("술을 마실 순 있지만, 조심하는 게 좋아요!");
}