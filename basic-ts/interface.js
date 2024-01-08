"use strict";
const man = {
    name: "LEE",
    age: 25,
    city: "city"
};
// -----------서버-------------
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default");
}
prt(man);
