const add1: Function = new Function("a","b","return a + 2 * b");
console.log(add1(1,3));

// 인터페이스는 객체나 class 를 만들때 쓰는타입
interface ADD2{
    (a:number, b:number):number;
}
// 함수도 객체다
const add2: ADD2 = function (a,b):number {
    return a + b;
}
console.log(add2(3,7));