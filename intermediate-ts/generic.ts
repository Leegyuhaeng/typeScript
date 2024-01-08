function printType(params:any) {
    console.log(typeof params);
}
printType("아무거나");
printType(23);
printType({});

// interface 에 <> 안에 T 는 관례적으로 type 의 약자로 T 를사용하지만 아무값이나 들어가도 상관없다 params 와 동일
interface IGene<T,N>  {
     data: T,
    array: Array<T>
    number: N,
    arr: N[]
}

// function prt 에서 제네릭<string> 을 넘겨주고 interface 에서 이값을 params 로 받아 작업을 한다
function prt(params: IGene<string,number>) {
    console.log(params);
}
prt({data:'test', array:['string','string'],number:1,arr:[1,2,3]});