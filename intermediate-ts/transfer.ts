// 프론트에서 서버로부터 받을때 class 를 많이 사용한다 json object
// public,protected,private != readonly 다르다 
// 접근제한자와 수정불가의 차이다 (get,set 으로도 수정불가)
// class LoginDataTransferObject{
//     public readonly ID;
//     public readonly PW?;
//     constructor(ID:string, PW?:string) {
//         this.ID = ID;
//         if (PW) this.PW = PW;   // 이런식으로 undefiend값을 막을수있다
//     }
// }

//위코드와 아래코드가 동일하다 타입부분을 constructor 인자값에 선언할수있다 
class LoginDataTransferObject{
    constructor(public readonly ID: string, public readonly PW?: string, public readonly NAME = 'defaultName') {
        this.ID = ID;
        this.NAME = NAME; // 이런식으로 default 네임을 줄 수 있다
        if (PW) this.PW = PW; // constructor args 에 type 을 지정하는 문법에서는 이런식으로 undefined값을 막지 못한다
    }
}
const LoginDTO = new LoginDataTransferObject("HI");
// LoginDTO.ID = "test";
console.log(LoginDTO);