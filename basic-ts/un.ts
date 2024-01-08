// 1. null undefined 같은 값

const un: undefined = undefined;

// 2. undefined 2개가 있다 type , 변수

// 3. 최하위 계층 = undefined = 모든 타입의 최하위계층이다

interface IMan {
    name: string;
}
function printName(params: IMan) {
    console.log("printName on!");
    console.log(params.name);
}

printName({name: "Lee"});

// printName(undefined);    //이건 작동을 하면안된다  하지만 런타임에선 타입이 string 으로 지정하였는데 undefined 값은 최하위 계층이라 있는값으로 인식을한다
// 런타임에선 돌아가지만 undefined 값이 들어가면 서버가 멈추는 오류가 발생할수도있다

// tsconfig.json > compilerOptions 에서 strictNullChecks 옵션을 true로 하면 undefined가 될 가능성이 있는 것들을 사전에 차단하므로 에러가 납니다  (사전방지 TIP)

// 예전 버전에서는 params 값에 undefined 값을 집어넣어도 함수가 실행되서 콘솔이 나왔는데 ts 버전업을 하면서 실행이 되지않는다