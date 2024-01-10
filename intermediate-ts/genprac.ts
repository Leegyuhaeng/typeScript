// 1 예제 interface 제네릭
interface IData<T extends string | number> {
    data: T,
}
// 2 function 제네릭

function returnParams<T>(params: T): T {
    return params;
}
returnParams<string>('hi');
returnParams<number>(25);
returnParams<boolean>(true);

// 3 arrow function

// const rp: (파라미터 타입) => 리턴타입 = returnParams
const rp: <T>(params: T) => T = returnParams
rp<string>('string')
// --------------------------------
// 이런식으로 인터페이스를 사용할수도 있다

// const rp:IExecute["rp"] = returnParams
// rp<string>('string')
// interface IExecute {
//     rp: <T>(params: T) => T;
// }

// 4
interface IOb1 {
    name: string;
    age: number;
}
interface IOb2 {
    city: string;
    phone: string;
}

// T는 오브젝트만 들어갈수있고 U 는 오브젝트의 키값만 들어갈수있게 제어할수있다
function prtKey<T extends object, U extends keyof T> (params: T, key: U): T[U] {
  console.log(params[key]);
  return params[key];
}
prtKey<IOb1, keyof IOb1>({name:"yoongsoo", age:25}, "name");
prtKey<IOb2, keyof IOb2>({city:"seoul", phone: "010111111111"}, "phone");

// 5
class ClassName<T> {
    constructor(private _data:T) {}
    set data(newData: T) {
        this._data = newData;
    }
    get data(): T {
        return this._data;
    }
}
new ClassName<string>('tst')