export class UserEntity {
    name?: string;
    age?: number;
    marketing?: boolean;

    constructor(name?: string, age?: number, marketing?: boolean) {
        if(name) this.name = name;
        if(age || typeof age === "number") this.age = age;
        if(marketing != undefined) this.marketing = marketing;
    }
    
    // 아래 주석은 위코드랑 똑같음      다만 데이터에 undefined 체크나 데이터의 무결성을 지켜줄수 없다
    // constructor(public name: string, public age: number, public marketing: boolean) {}

    //Builder 패턴을 만들때는 내부에 Builder 클래스를 만들어줘야된다
    //Builder 패턴을 사용하면 class 를 만들때 어떤값이 들어가는지 명확하게 알수있다 (여러사람이 협업할때 명확한 class 내부를 알수있다)
    static Builder = class {
        private _name?: string;
        private _age?: number;
        private _marketing?: boolean;

        name(newName: string) {
            this._name = newName;
            return this;
        }
        age(newAge: number) {
            this._age = newAge > 0 ? newAge : 0;
            return this;
        }
        marketing(newMarketing: boolean) {
            this._marketing = newMarketing;
            return this;
        }
        build(): UserEntity {
            return new UserEntity(this._name,this._age,this._marketing)
        }
    }
}

