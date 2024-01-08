"use strict";
class UserInfo {
    constructor(name, age, city, phone) {
        this.name = name;
        this._age = age;
        this._city = city;
        this._phone = phone;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        newAge > 0 ? this._age = newAge : this._age = 0;
    }
    get city() {
        return this._city;
    }
    set city(newCity) {
        this._city = newCity;
    }
    get phone() {
        // console.log("get",this._phone);
        return this._phone.slice(0, 3) + '-' + this._phone.slice(3, 7) + '-' + this._phone.slice(7, 11);
    }
    set phone(newPhone) {
        // console.log("set",newPhone);
        this._phone = newPhone;
    }
}
const user = new UserInfo("용수", 25, "seoul", "01011111111");
// public 으로 선언이되어있으면 해당 프로퍼티를 바꿀수있지만 protected,private 이라면 해당 프로퍼티를 바꾸려면 get set 을 호출해 내부에서 바꿔야한다
user.name = "규행";
// 프로퍼티 를 할당해줄때 set 호출
user.age = 17;
user.city = "il san";
console.log("user", user);
user.phone = "01012341234";
// 프로퍼티를 호출할때 get 호출
console.log("user", user.phone);
// console.log(user.name, user.age, user.city)
