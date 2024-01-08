"use strict";
let nameOrAge;
nameOrAge = "yongsoo";
nameOrAge = 25;
function prtUnion(params) {
    // 이로직은 에러가난다 타입을 보장받을수 없기때문
    // if(params.name) {
    //     console.log(params.name);
    // }
    // if(params.age) {
    //     console.log(params.age);
    // }
    // 첫번쨰에 for in 으로 오브젝트의 프로퍼티값으로 조건을 검사한다
    // name 정보가 들어왔을 때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을 때 로직
    if ("age" in params) {
        console.log(params.age);
    }
}
prtUnion({ name: "a" });
const nameAndAge = {
    name: "yongsoo",
    age: 25,
};
function search(params) {
    console.log(params.name + params.age);
}
search({ name: "name", age: 25 });
