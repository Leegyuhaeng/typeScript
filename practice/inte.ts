interface ICar {
    name: string;
    speed: number;
}

const car = { speed: 0, name: "" };

const carProxy: ICar = new Proxy<ICar>(car,{
    get(target: ICar, p: keyof ICar) {
        console.log("get",target,p);
        return target[p];
    },
    // key of ICar
    // ICar의 타입들과 동일한 타입 string | number

    // typeof p 의 값은 name:string | speed: number 값이다 
    // type 에 typeof 를 할경우 object 가 들어가는게 아니라 해당 타입이 들어간다
    // typeof target[typeof p] = typeof p 랑 같다 좀더 명확하게 표현하기 위해 typeof target[typeof p] 를 사용한거같다
    // (target 의 p 라는 것을 명시하려고 한것같음)

    set(target: ICar, p:keyof ICar ,newValue: typeof target[typeof p]) {
        console.log("set",target,p,newValue);
        if(p === 'speed') target.speed = newValue > 0  ? newValue : 0;
        return true;
    }
});

carProxy.speed = 30;
console.log(carProxy.speed);