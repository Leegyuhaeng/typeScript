type userType = "admin" | "manager" | "user";
// type post info detail
interface IAdmin {
    type: userType,
    post: any;
    info: any;
    detail: any;
}
interface IManager {
    type: userType,
    post: any;
    info: any;
}
interface IUser {
    type: userType,
    post: any;
}


//  타입 캐스팅 ({{param}} as interFace).{{property}} | (<interFace> {{param}}).{{property}}
function getLogic(p: IAdmin | IManager | IUser) {
    switch (p.type) {
        case "admin":
            console.log("관리자",(p as IAdmin).post);
            console.log("관리자",(p as IAdmin).info);
            console.log("관리자",(p as IAdmin).detail);
            break;
        case "manager":
            console.log("매니저",(<IManager>p).post);
            console.log("매니저",(<IManager>p).info);
            break;
        case "user":
            console.log("유저",(p as IUser).post);
            break;
    }
}
getLogic({type:'manager', post: 'test', info:'test2'});


// numeric Type

type errorCode = 404 | 500;

interface I_NOT_FOUND {
    code: errorCode,
    notFoundFunc: any;
}

interface I_INTER_ERROR {
    code: errorCode,
    interError: any;
}

function errorHandler(p: I_NOT_FOUND | I_INTER_ERROR) {
    switch (p.code) {
        case 404:
            console.log((p as I_NOT_FOUND).notFoundFunc);
            break;
        case 500:
            console.log((<I_INTER_ERROR>p).interError);
            break;
    }
}
errorHandler({code:404, notFoundFunc:"404에러"});
errorHandler({code:500,interError:"인터넷 에러"});