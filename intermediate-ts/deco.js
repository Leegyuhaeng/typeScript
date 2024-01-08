// f(g(x))  -----> f () { return g () } , g: 데코레이터 함수
// g -----> f(g(x)) , f: 데코레이터 팩토리 (목적: 인자전달, params 전달)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다
function Controller(constructor) {
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
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 여기서는 : 이 아니라 할당을하려면 = 을 해야한다
            _this._email = "deco@inflearn.com";
            return _this;
        }
        return class_1;
    }(constructor));
}
function Get(params) {
    // console.log("[GET]",params);
}
function Post(params) {
    console.log("[Post] deco Factory", params);
    return function (constructor, // 대상 클래스
    propertyKey, // 자신의 첫번째 프로퍼티
    descriptor // metaData
    ) {
        constructor.postReq();
        constructor[propertyKey]();
        // console.log('Post deco Func',constructor,propertyKey,descriptor);
        console.log('Post deco Func 1===>', constructor);
        console.log('Post deco Func 2===>', propertyKey);
        console.log('Post deco Func 3===>', descriptor);
    };
}
function Column(params) {
    // console.log("[Column]",params);
}
function test123(params) {
    // console.log("[test123] deco Factory" ,params);
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
var ExampleController = /** @class */ (function () {
    function ExampleController(email) {
        this._email = email;
    }
    ExampleController.prototype.getReq = function () { };
    ExampleController.prototype.postReq = function () {
        console.log("POST Process===>");
    };
    ExampleController.prototype.test123Req = function () { };
    __decorate([
        Column("email")
    ], ExampleController.prototype, "_email", void 0);
    __decorate([
        Get("/api/v1/user")
    ], ExampleController.prototype, "getReq", null);
    __decorate([
        Post("/api/v1/board")
    ], ExampleController.prototype, "postReq", null);
    __decorate([
        test123("test123")
    ], ExampleController.prototype, "test123Req", null);
    ExampleController = __decorate([
        Controller
    ], ExampleController);
    return ExampleController;
}());
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @InitClass(위코드와같이) -> new Class() 인스턴스화 없이 실행
console.log(new ExampleController("example@inflearn.com"));
// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을거 같다..
