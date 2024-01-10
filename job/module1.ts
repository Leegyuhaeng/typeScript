// nameSpace
// nameSpace 를 통해 모듈들이 서로 안겹치게 관리할수 있고 모듈들을 namespace 별로 묶어서 관리할 수도 있다

// export namespace LEE {
//     export function add(a:number, b: number) {
//         return a + b;
//     }
//     export function add1(a:number, b: number) {
//         return a + b;
//     }
//     export function add2(a:number, b: number) {
//         return a + b;
//     }
//     export function add3(a:number, b: number) {
//         return a + b;
//     }
//     export function minus(a:number, b:number) {
//         return a - b;
//     }
// }


 namespace LEE {
    export function add(a:number, b: number) {
        return a + b;
    }
    export function add1(a:number, b: number) {
        return a + b;
    }
    export function add2(a:number, b: number) {
        return a + b;
    }
    export function add3(a:number, b: number) {
        return a + b;
    }
    export function minus(a:number, b:number) {
        return a - b;
    }
}


// export 방법
// 1.  export function add1(a:number, b: number) {
//     return a + b;
// }
// 2.  function add1(a:number, b: number) {
//     return a + b;
// }
// export { add1 };
export {LEE};