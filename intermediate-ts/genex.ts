// extends 을 사용하는 이유 1 (제한,안정성) 2 (보장)

// 1 (제한 ,안정성) 예제

// 함수에도 제네릭을 넣을수 있다
// 아래 예제처럼 extends 를 이용하여 여러사람들이 제네릭값을 막넣는것을 방지할수있다 제네릭값에 규격을 정해놓음
function prt<T extends string | number, U extends boolean | object>(params: T , params2: U) {
    if(typeof  params === "string") console.log("문자열 입니다");
    else if (typeof params === "number") console.log("숫자입니다");

    if(typeof  params2 === "boolean") console.log("boolean 입니다");
    else if (typeof params2 === "object") console.log("객체입니다");
}
prt("하하하",true);
prt<number, object>(123, {});

// 2 보장
interface IHi {
    hi: (props: string) => void;
}
// 이코드는 인자값에 객체가들어있지만 해당 객체안에 hi 라는 함수을 보장받지못해 빨간줄이뜬다
// function execute<T extends object>(params: T) {
//     params.hi();
// }
// execute({
//     hi() {
//         console.log("hi!");
//     },
// })
function execute<T extends IHi>(params: T) {
    params.hi("yongsoo");
}
execute({
    hi(name: string) {
        console.log("hi!",name);
    },
})