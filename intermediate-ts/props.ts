// interface IName {
//     name: string;
// }
//
// interface ISchool {
//     school: string;
// }
//
// interface ICity {
//     city: string;
// }
// 위 interface 와같이 해당 type 이 전부 string이며 키값만 바뀔경우
// 코드가 너무 길어질수 있음으로 아래 코드를 이용하는 경우가 많다

interface ISuperKey {
    [props: string]: string;
}
// ISuperKey props 는 객체의 키값을 자동으로 받는다
function print(params: ISuperKey) {
    if('name' in params) console.log(params.name);
    else if('school' in params) console.log(params.school);
    else if('city' in params) console.log(params.city);
    else console.log('500 Error');
}
print({name: "name"});