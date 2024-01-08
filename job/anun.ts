// any unknown 의 차이

const user: any = {
    ID: "yongsoo",
};
console.log(user.name);     //undefined
console.log(user.length);   //undefined

const newUser: unknown = {
    ID: "yongsoo"
};
console.log(newUser) // print
// console.log(newUser.ID);     //error
// console.log(newUser.name);   //error
// console.log(newUser.length);   //error

// unknown 값은 해당 프로퍼티에 접근을하면 모두 error 를 낸다
// 값을 알수없는 api 나 외부 api 를 사용할때 안정성을위해 프로퍼티 접근을 제어하기위해 사용한다