"use strict";
function add(a, b) {
    console.log("hello world");
    return;
}
add(1, 2);
// const minus = (a,b) => {
//     return a - b;
// }
// const minus: (a: number, b:number) => number = (
//     a: number,
//     b:number
// ): number => (a - b);
// ----------------------------------
const minus = (a, b) => (a - b);
minus(7, 5);
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
const mutiple = (a, b) => {
    return () => {
        return a * b * 2;
    };
};
mutiple(3, 5);
function sendError() {
    throw { errorCode: 500, message: 'internal server error' };
}
const result = sendError();
console.log("result", result);
