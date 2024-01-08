// 2 function 제네릭
function returnParams(params) {
    return params;
}
returnParams('hi');
returnParams(25);
returnParams(true);
// 3 arrow function
// const rp: (파라미터 타입) => 리턴타입 = returnParams
var rp = returnParams;
rp('string');
// T는 오브젝트만 들어갈수있고 U 는 오브젝트의 키값만 들어갈수있게 제어할수있다
function prtKey(params, key) {
    console.log(params[key]);
    return params[key];
}
prtKey({ name: "yoongsoo", age: 25 }, "name");
prtKey({ city: "seoul", phone: "010111111111" }, "phone");
// 5
var ClassName = /** @class */ (function () {
    function ClassName(_data) {
        this._data = _data;
    }
    Object.defineProperty(ClassName.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (newData) {
            this._data = newData;
        },
        enumerable: false,
        configurable: true
    });
    return ClassName;
}());
