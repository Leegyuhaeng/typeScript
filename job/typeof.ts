console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);

const exString: string = "some string";

const childString: typeof exString = "haha";

// typeof exString 를 사용하면 exString 에 선언한 타입을 그대로 가져온다

function add(a: number, b:number) : number {
    return a+b;
}
type A = ReturnType<typeof add>
//제네릭 ReturnType 은 <안에 들어온 함수의 리턴값을 타입으로 정의해줄수 있다>
// 예시
// const q :number = 1;
// console.log(q); // print
// const w :typeof add = 2;
// console.log(w);  // error
// const e :A = 3;
// console.log(e);  // print

enum ENumbers {
    "zeor",
    "one",
    "two",
    "three"
}
console.log("type", typeof  ENumbers); // object
const nums: typeof ENumbers = ENumbers;
console.log(nums.three);


