// import {add, minus} from "./module1";
// 위 방식대로 하면 해당 모듈이 하나 늘어날때마다 하나씩 선언해줘야한다

import * as MATH from "./module1";
// 위 방식을 이용하면 해당 모듈이 늘어나도 MATH 를 통해 접근을 할수 있다

// 아래는 모듈에 namespace 까지 추가한 모습
console.log(MATH.LEE.add(1,2), MATH.LEE.minus(3,1));
console.log(MATH.LEE.add1(1,2), MATH.LEE.add2(3,1));