import {CalculatorImpl} from "./callmpl";
import {ICalculator} from "./cal";


const cal: ICalculator = new CalculatorImpl()
console.log(cal.add(1,2));
console.log(cal.add(7,2));
console.log(cal.add(1,4));

// OOP
// 결합도를 낮추자
// 결합도가 높으면 자동차를 class 라 할때 헤드램프만 바꾸고싶은데 헤드램프를 바꾸려면 본넷도 문짝도 바꿔야하는상황이 올수도있다 (전체를 손봐야될수도있다)

// 설계중심
// 객체지향 프로그래밍을 한다는것은 언제나 확장을 할수있게 설계를 해야한다
// interface 는 설계서다
// class 를 타입으로 잡게되면 해당 객체는 클래스타입에 의존도가 높아지게된다 + 추상화가 되어있지 않기 때문에 가독성이 떨어질수도 있다 (class 를 보고 추론할때 추론하기 힘들수도 있음)
// 고로 인터페이스 (추상화된 모델) 을 타입으로 잡아 서로 의존도를 낮추고 설계대로 작업하게끔 해야한다


//대규모프로젝트에서 필요 => 소규모에선 불필요 (번거로움)
