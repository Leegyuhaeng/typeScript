// f(g(x))  -----> f () { return g () } , g: 데코레이터 함수
// g -----> f(g(x)) , f: 데코레이터 팩토리 (목적: 인자전달, params 전달)

// 1. 데코레이터는 함수다
function Controller(constructor: { new (email:string): any}): any {
    //  만약 constructor 안에 인자들이 많다면 { new (...arg : any[]): any } 를 사용한다

    console.log("Controller : ", constructor);
    // // 리턴을 사용하는순간 이 함수는 데코레이터 팩토리가되며
    // // 이 리턴은 데코레이터 함수가된다
    // return (
    //     constructor: Function,
    //     propertyKey: string,
    //     descriptor: PropertyDescriptor
    //         ) => {
    //     console.log('console.log',constructor,propertyKey,descriptor);
    // }



//     데코레이터 안에 데이터를 조작할때는 class 를 return 해야된다
//     이 로직은 인스턴스화 시켜야 작동을 한다 아래에서 new ExampleController 를 하여야한다
    return class extends constructor {
        // 여기서는 : 이 아니라 할당을하려면 = 을 해야한다
        _email = "deco@inflearn.com"
    }
}

function Get(params: any):any {

    console.log("[GET]",params);
}

function Post(params: any):any {
    console.log("[Post] deco Factory" ,params);

    return (
        constructor: any, // 대상 클래스
        propertyKey: string,    // 자신의 첫번째 프로퍼티
        descriptor: any // metaData
    ) => {
        constructor.postReq();
        constructor[propertyKey]();
        // console.log('Post deco Func',constructor,propertyKey,descriptor);
        console.log('Post deco Func 1===>',constructor);
        console.log('Post deco Func 2===>',propertyKey);
        console.log('Post deco Func 3===>',descriptor);
    }
}

function Column(params: any):any {
    console.log("[Column]",params);
}
function test123(params: any):any {
    console.log("[test123] deco Factory" ,params);
    //
    // return (
    //     constructor: Function,
    //     propertyKey: string,
    //     descriptor: PropertyDescriptor
    // ) => {
    //     console.log('test123 deco Func',constructor,propertyKey,descriptor);
    // }
}
// 2. 데코레이터는 무조건 class 와 같이쓴다 (내부 외부, 맴버 변수, 메소드, 파라미터 ...)

@Controller
class ExampleController {

    @Column("email")
    private _email:string;
    constructor(email:string) {
        this._email= email;
    }

    @Get("/api/v1/user")
    getReq() {}
    @Post("/api/v1/board")
    postReq() {
        console.log("POST Process===>");
    }
    postReq2() {
        console.log("POST Process===>222");
    }
    @test123("test123")
    test123Req() {}
}

// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @InitClass(위코드와같이) -> new Class() 인스턴스화 없이 실행
console.log(new ExampleController("example@inflearn.com"));


// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을거 같다..


//실행구분 tsc --experimentalDecorators intermediate-ts/deco.ts ; node intermediate-ts/deco.js