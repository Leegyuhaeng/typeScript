// abstract => 상속, 슈퍼-서브 , 부모-자식
// interface => 구현 , 어떠한 기능을 설계 명세

// class 는 interface 와 다르게 extents 를하면 super 를 해야된다
// interface 는 자동상속

//추상 클래스
abstract class Linux {

    protected abstract _description?: string;
    constructor(protected _name: string, protected _version: number) {}

    abstract operation(): void; // 운영체제가 컴퓨터 켤때 (운영체제마다 켜지는 동작이 다르기때문에 abstract 를 넣는다 )
    // abstract 를 사용하면 각각의 class 에서 operation 를 (재 구현)오버라이딩? 해줘야한다
    // 자식에서 사용할 애들 정의?

    turnOff() { //모든 컴퓨터가 끄는 프로세스는 동일하기때문
        console.log("모든 프로그램 종료후 컴퓨터 끄기")
    }
}

class RedHat extends Linux implements IFileSystem, IProcess{
    protected _description ?: string;
    constructor(_name: string, _version: number, _description?: string) {
        super(_name,_version);
        if(_description) this._description = _description;
    }
    operation() : void {
        console.log("윈도우 켜짐");
    }
    write() {}
    open() {}
    clone() {}
    kill() {}
}
const a = new RedHat("lee",1);
console.log(a);

interface IFileSystem {
    write(): void
    open(): void
}

interface IProcess {
    clone(): void,
    kill(): void,
}
// 예시
// abstract 이동수단을 하나만든다 (추상적이게 작업) => 타다,내리다

//관련된 interface 를 만든다 (기어, 벨, 백미러,사이드미러,핸들)

// 오토바이 extends 이동수단 inplements (핸들,기어,사이드미러)

// 자전거 extends 이동수단 inplements (핸들,기어)

// 자전거 extends 이동수단 inplements (기어,벨,백미러,사이드미러,핸들)

// 이런식으로 설계들을 모아 하나의 제품을 만든다

