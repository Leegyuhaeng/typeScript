import {newBuilder} from "./newBuilderDeco";

export class NewUserEntity {
    name?: string;
    age?: number;
    marketing?: boolean;

    constructor(name?: string, age?: number, marketing?: boolean) {
        if(name) this.name = name;
        if(age || typeof age === "number") this.age = age;
        if(marketing != undefined) this.marketing = marketing;
    }

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
        build(): NewUserEntity {
            return new NewUserEntity(this._name,this._age,this._marketing)
        }
    }

}
// 데코레이터를 사용하면 type error 가 나온다 그래서 아래 클래스를 extend 를 해줘야된다

class BuilderInit {
    static NewBuilder = class {
        build() {}
        [props : string] : Function;
    }
}

@newBuilder
export class PostEntity extends BuilderInit{
    //데코레이터를 사용할때는 아래와 같이 constructor 에 설정을 해놔야됨
    constructor(
        public title: string,
        public content: string,
        public author: string
    ) {
        super();
    }
}