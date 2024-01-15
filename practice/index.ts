// class Person {
//     constructor(public name, public city) {}
//
//     getName() {
//         console.log(`my name is ${this.name}`);
//     }
// }
// const p = new Person('cys','seoul');
// console.log(p,p.getName());

// 위 class 코드를 function 으로 바꿨을때

function Person(name,city) {
    this.name = name;
    this.city = city;

    //
    this.getName = function () {
        console.log(`my name is ${this.name}`);
    };
    // 화살표 함수를 사용하면 안된다 this 가 달라지기때문 && 호이스팅도 달라진다
    // this.getName = () => {
    //     console.log(`my name is ${this.name}`);
    // };
}

// extent 를 함수로 변환하면

function Student(name,city,uni) {
    // call은 함수의 프로토타입에 들어있는 method
    // call 의 this는 Student 가 된다 (그러므로 Person 의 this는 Student 가 된다)
    Person.call(this,name,city)
    this.uni = uni;

    this.getUni = function () {
        console.log(`hi ${this.uni}`);
    }
}

interface IPerson {
    (name: string, city: string) : void;

    name: string;
    city: string;

    getName: () => void;
}

interface IStudent extends IPerson{
    (name: string, city: string, uni: string) : void;
    uni: string;
    getUni: () => void;
}

const s: IStudent = new Student("Lee","seoul","CAU");
console.log(s,s.getName(),s.getUni());