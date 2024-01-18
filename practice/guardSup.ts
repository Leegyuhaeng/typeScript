//  방법1
// interface IPerson {
//     name: string;
//     walk(): void;
// }
//
// interface IAnimal {
//     name: string;
//     bark(): void;
// }
//
// // 타입가드 = 해당 타입의 범위를 좀더 좁혀줌
// // {{object}} is {{interface}} 어떤값에 대한 불린인지 정의할수있음 object 가 이 항목에 대한 인터페이스가 맞나
// // 이방법을쓰면 인터페이스가 확장될때마다 아래 함수들도 추가해야된다
// function isPerson(o:IPerson | IAnimal) : o is IPerson /*: boolean */ {
//     return "name" in o && "walk" in o;
// }
//
// function isAnimal(o:IPerson | IAnimal) : o is IAnimal /*: boolean */{
//     return "name" in o && "bark" in o;
//
//
// function somethingTodo(o:IPerson | IAnimal) {
//     /*사람일때*/ if(isPerson(o))o.walk();
//     /*동물일때*/ if(isAnimal(o))o.bark();
// }



// 방법2
// 공통적인 설계 들은 하나의 제네릭 인터페이스를 만들고 공통제네릭 인터페이스를  확장하여 사용한다 
// 하나의 제네릭인터페이스를 추가하면 하위 인터페이스들도 참조를 한다



interface IType<T> {
    type: T
}

interface IPerson extends IType<"person">{
    name: string;
    walk(): void;
}

interface IAnimal  extends IType<"animal">{
    name: string;
    bark(): void;
}


function somethingTodo(o: IPerson | IAnimal) {
    switch (o.type) {
        case "person":
            o.walk();
            break;
        case "animal":
            o.bark();
            break;
    }
}

somethingTodo({
    type: "person",
    name:"용수",
    walk() {
        console.log('산책')
    }
})