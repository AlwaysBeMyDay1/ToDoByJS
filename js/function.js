function sayHello(name){
    console.log("안녕하세요. "+name+"입니다");
};

sayHello("김대연");

//object + function 
// console도 많은 성질 ㅇ 즉, console도 오브젝트

console.log(console);

const calculator = {
    plus : function(a,b){
        console.log(a+" + "+b+" = "+ Number(a+b));
    },
    subtract : function(a,b){
        console.log(a+" - "+b+" = "+ Number(a-b));
    },
    multiple : function(a,b){
        console.log(a+" * "+b+" = "+Number(a*b));
    },
    divide : function(a,b){
        console.log(a+" / "+b+" = "+Number(a/b));
    },
    square : function(a,b){
        console.log(a+" ^ "+b+" = "+Number(a**b));
    }

};

console.log(calculator);
console.log(calculator, console);


//calculator with RETURN
const calculator2 = {
    plus : function(a,b){
        console.log("더하기"); //출력됨
        return a+b;
        console.log("더하기"); //출력 안됨, return과 동시에 함수 종료됨.
    },
    subtract : function(a,b){
        return a-b;
    },
    multiple : function(a,b){
        return a*b;
    },
    divide : function(a,b){
        return a/b;
    },
    square : function(a,b){
        return a**b;
    },

};

calculator.plus(23,3);
calculator.subtract(7,15);
calculator.multiple(7,15);
calculator.divide(105,7);
calculator.square(2,10);

console.log(calculator2.plus(9,1));
console.log(calculator2.subtract(9,1));
console.log(calculator2.multiple(9,1));
console.log(calculator2.divide(9,1));
console.log(calculator2.square(9,1));
