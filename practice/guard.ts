interface IDetail {
    name: string;
    age: number;
    city: string;
}

class DetailClass {
    constructor(public name: string, public age: number, public city: string) {
    }
}

type typeSNS = "KAKAO" | "NAVER"; // 리터럴 타입

interface IUser {
    detail: IDetail;
    marketing: boolean;
    sns: typeSNS;
}
// typeof newValue = IDetail 이지만 interFace 를 조건문에 활용할수없기때문에 object 또는 class 를 만들어 instanceof 를 사용한다
// newValue === "object" | newValue instanceof {{ class }}
//타입가드
function setUser(target: IUser,param: keyof IUser, newValue: typeof target[typeof param]) {
    if(param === "marketing" && typeof newValue === "boolean") {
        target[param] = newValue;
    } else if (param === "detail" &&  newValue instanceof DetailClass) {
        target[param] = newValue;
    } else if (param === "sns" &&  typeof newValue === "string") {
        const val: typeSNS = newValue;
        target[param] = val;
    }
}
const detail: IDetail = new DetailClass("Lee",25,"seoul");
const user: IUser = {
    detail,
    marketing: true,
    sns: "NAVER",
};
console.log('before',user);
// setUser(user,'sns',"KAKAO");
setUser(user,'detail',new DetailClass("Lee2",27,"seoul"));
console.log('after',user);