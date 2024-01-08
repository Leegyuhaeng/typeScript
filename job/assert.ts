// const testText1 = document.querySelector("#comeText")!;
// console.log(testText1.id);
//
// const testText2 = document.querySelector("#comeText");
// console.log(testText2?.id);
//
// // const testText3 = document.querySelector("#comeText");
// // console.log((testText3 as HTMLElement).id);
// const testText3 = document.querySelector("#comeText") as HTMLElement;
// console.log(testText3.id);

// 해당 DOM 기본 타입은 El | null 로 들어가기 때문에 이 변수의 프로퍼티를 접근을 하려면 type 에서 빨간불이 들어온다
// 방법 1. 해당 프로퍼티 값이 확실하게 들어온다면 해당 변수 뒤에 ! 를 붙이게되면 빨간줄이 사라지게 된다
// 방법 2. 옵셔널 체이닝을 사용한다
// 방법 3. HTMLElement 를 사용한다

interface IExam {
    value:number;
}

const example: object = {value: 1};
// console.log(example.value);
//  1. as
console.log((example as IExam).value);
//  2. 제네릭 <>
console.log((<IExam>example).value);

// 이렇게 변수에 값을 할당하면서 동시에 as 를 쓸 수 있습니다!
const examples2: object = { value : 1 } as IExam;
const examples3: object = <IExam>{ value : 1 } ;
const examples4 :IExam = { value : 1 };

console.log(examples2);
console.log(examples3);
console.log(examples4.value);