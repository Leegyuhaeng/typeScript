"use strict";
// 성별, 부서코드, 카테고리, ...
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
const category = categoryEnum.H;
// const category = "";
//  서버
function cate(category) {
    if (category === 'H') {
        console.log('5% 할인');
    }
    else if (category === 'K') {
        console.log('10% 할인');
    }
    else if (category === 'S') {
        console.log('80% 할인');
    }
    else {
        console.log('서버 멈춤');
    }
}
cate(category);
// 리터럴 타입
var sexEnum;
(function (sexEnum) {
    sexEnum["MALE"] = "MALE";
    sexEnum["FEMALE"] = "FEMALE";
    sexEnum["ETC"] = "ETC";
})(sexEnum || (sexEnum = {}));
const sex = "ETC"; // 같은 내용 이지만 1회성 리터럴 코드
const sex2 = sexEnum.ETC; //  재활용 가능한 enum 코드
// type sexType = 'MALE' | 'FEMALE' | 'ETC';
//  enum 대신 type 을 이용할수도 있다
