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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
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
    console.log("[GET]", params);
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
    console.log("[Column]", params);
}
function test123(params) {
    console.log("[test123] deco Factory", params);
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
var ExampleController = function () {
    var _classDecorators = [Controller];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var __email_decorators;
    var __email_initializers = [];
    var _getReq_decorators;
    var _postReq_decorators;
    var _test123Req_decorators;
    var ExampleController = _classThis = /** @class */ (function () {
        function ExampleController_1(email) {
            this._email = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, __email_initializers, void 0));
            this._email = email;
        }
        ExampleController_1.prototype.getReq = function () { };
        ExampleController_1.prototype.postReq = function () {
            console.log("POST Process===>");
        };
        ExampleController_1.prototype.postReq2 = function () {
            console.log("POST Process===>222");
        };
        ExampleController_1.prototype.test123Req = function () { };
        return ExampleController_1;
    }());
    __setFunctionName(_classThis, "ExampleController");
    (function () {
        __email_decorators = [Column("email")];
        _getReq_decorators = [Get("/api/v1/user")];
        _postReq_decorators = [Post("/api/v1/board")];
        _test123Req_decorators = [test123("test123")];
        __esDecorate(_classThis, null, _getReq_decorators, { kind: "method", name: "getReq", static: false, private: false, access: { has: function (obj) { return "getReq" in obj; }, get: function (obj) { return obj.getReq; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _postReq_decorators, { kind: "method", name: "postReq", static: false, private: false, access: { has: function (obj) { return "postReq" in obj; }, get: function (obj) { return obj.postReq; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _test123Req_decorators, { kind: "method", name: "test123Req", static: false, private: false, access: { has: function (obj) { return "test123Req" in obj; }, get: function (obj) { return obj.test123Req; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, __email_decorators, { kind: "field", name: "_email", static: false, private: false, access: { has: function (obj) { return "_email" in obj; }, get: function (obj) { return obj._email; }, set: function (obj, value) { obj._email = value; } } }, __email_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ExampleController = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ExampleController = _classThis;
}();
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @InitClass(위코드와같이) -> new Class() 인스턴스화 없이 실행
console.log(new ExampleController("example@inflearn.com"));
// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을거 같다..
//실행구분 tsc --experimentalDecorators intermediate-ts/deco.ts ; node intermediate-ts/deco.js
