interface IAdd {
    a: number;
    b: number;
    getResult(): number;
}

function add(a:number, b: number): void {
    this.a = a;
    this.b = b;

    this.getResult = () : number => {
        return this.a + this.b;
    };

}

const temp1: IAdd = new add(1,2);
const temp2: IAdd = new add(3,4);
// function 을 만들때도 new 문법을 사용할 수 있다 (다만 함수가 void 이여야만 한다) this 객체를 만들어주기위함


console.log(temp1,temp1.getResult());
console.log(temp2,temp2.getResult());

