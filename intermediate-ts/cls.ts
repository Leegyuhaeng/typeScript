class UserInfo{
    // public,protected,private 접근제한자
    public name: string; // 어디서나 접근이 가능함
    protected _age: number; //접근이 자기 + 자신을 상속한 자식 한테 허용
    private _city: string; // 접근이 자기자신한테만 허용  private 은 이름앞에 _를 붙이는게 관례
    private _phone: string; // (get,set 활용)
    constructor(name: string, age: number, city: string, phone: string) {
        this.name = name;
        this._age = age;
        this._city = city;
        this._phone = phone;
    }
    get age() : number {
        return this._age;
    }
    set age(newAge :number) {
        newAge > 0 ? this._age = newAge : this._age = 0;
    }
    get city() : string{
        return this._city;
    }
    set city(newCity:string) {
        this._city = newCity;
    }

    get phone() : string{
        // console.log("get",this._phone);
        return this._phone.slice(0,3) + '-' + this._phone.slice(3,7) + '-' + this._phone.slice(7,11);
    }
    set phone(newPhone:string) {
        this._phone = newPhone;
         console.log("set",this._phone);
    }

}
const user = new UserInfo("용수",25,"seoul", "01011111111");
// public 으로 선언이되어있으면 해당 프로퍼티를 바꿀수있지만 protected,private 이라면 해당 프로퍼티를 바꾸려면 get set 을 호출해 내부에서 바꿔야한다
user.name = "규행";
// 프로퍼티 를 할당해줄때 set 호출
user.age = 17;
user.city = "il san";
console.log("user",user);
user.phone = "01012341234";
// 프로퍼티를 호출할때 get 호출
console.log("user",user.phone);
// console.log(user.name, user.age, user.city)
