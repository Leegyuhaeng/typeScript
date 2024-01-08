"use strict";
const arr1 = [1, 2, 3]; // number 형태를 담아둔 배열 (이 형태를 많이 사용함)
const arr2 = [1, 2, 3]; //제네릭타입
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
const arr = [
    {
        name: "LEE",
        age: 25,

        city: "seoul"
    },
    {
        name: "LEE",
        age: 25,
    },
    {
        name: "LEE",
        age: 25,
        city: "seoul"
    },
    {
        name: "LEE",
        age: 25,
    },
    {
        name: "LEE",
        age: 25,
        city: "seoul"
    },
];
arr.forEach((e) => { var _a; return console.log((_a = e === null || e === void 0 ? void 0 : e.city) !== null && _a !== void 0 ? _a : 'default'); });
//  튜플 - 배열의 길이 length 와 안에 원소를 바꿀수 없는 .. 불변성 유지
const arr6 = [1, "hi", {}, []]; // 이런식으로 튜플을 활용하면 배열의 길이와 타입 순서 등의 규칙을 정할수 있다
