import {ICalculator} from "./cal"
// Impl = 인터페이스로 구현한 class 를 정의
export class CalculatorImpl implements ICalculator {
    add(a: number,b: number):number {
        return a + b;
    };
    minus(a: number,b: number):number {
        return a - b;
    };
    multiple(a: number,b: number): number {
        return a * b;
    };
}