function add(a: number, b:number): void {
    console.log("hello world");
    return;
}
add(1,2);

// const minus = (a,b) => {
//     return a - b;
// }


// const minus: (a: number, b:number) => number = (
//     a: number,
//     b:number
// ): number => (a - b);

// ----------------------------------
const minus: addFunc = (
    a: number,
    b:number
): number => (a - b);

minus(7,5);


// js
// const mutiple = (a,b) => {
//     return a * b * 2;
// }

// ts
// const mutiple: (a: number, b:number) => () => number = (
//     a:number,
//     b: number
// ): (() => number) => {
//     return () => {
//         return a * b * 2;
//     };
// };

// ---------------------------------------------

const mutiple: mainMutiFunc = ( a:number, b: number): subMultiFunc => {
    return () => {
        return a * b * 2;
    };
};
mutiple(3,5);

type addFunc = (a:number, b:number) => number;
type subMultiFunc = () => number;
type mainMutiFunc = (a:number, b:number) => subMultiFunc;

function sendError(): never {
    throw { errorCode: 500, message: 'internal server error' };
}
const result = sendError();
console.log("result",result);

