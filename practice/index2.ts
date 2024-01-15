interface IAdd {
    (a: number, b:number): IAdd;

    a:number;
    b:number;

    getResult(): number;
}

class Add {
    constructor(public a: number,public b: number) {}
    getResult() {
        return this.a + this.b;
    }
}
const a = new Add(5,7);
console.log(a,a.getResult());


const add = (a,b): IAdd => {
    //this as any as IAdd  => arrow Function 에서 this 는 global this 이지만 이런식으로 타입을 as로 우회 할수도 있다

    // const _this = JSON.parse(JSON.stringify(this)) as any as IAdd // 깊은복사로인해 여러번 호출해도 할당된 변수의 값이 같음
    const _this = this as any as IAdd // 싱글톤 (하나의 this 를 공유)
    _this.a = a;
    _this.b = b

    _this.getResult = () => {
       return a + b;
    }
    return _this;
}
//여기선 new 키워드가 안됨 this가 global 인 상태에서  새로운 this 를 만들고 만든 this를 리턴하기때문 (프로토타입 this 가 아니기때문)
const temp = add(1,2);
const temp2 = add(3,4);

console.log(temp, temp.a, temp.b, temp.getResult());
console.log(temp2, temp.a, temp.b, temp2.getResult());