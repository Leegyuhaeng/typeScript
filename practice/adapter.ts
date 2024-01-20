export interface ICalculator {
    add(a: number,b: number) :number;
    minus(a: number,b: number) : number;
}


export class CalculatorImpl implements ICalculator {
    add(a: number,b: number):number {
        return a + b;
    };
    minus(a: number,b: number):number {
        return a - b;
    };
}

export interface ICalculatorAdapter {
    addAandB(a: number,b: number) :number;
    minusAandB(a: number,b: number) : number;
}


class Adapter extends CalculatorImpl implements ICalculatorAdapter {
    addAandB(a: number,b: number) :number {
        return this.add(a,b) * 2;
    };
    minusAandB(a: number,b: number) : number {
        return this.minus(a,b) * 2;
    };
}

const cal: ICalculatorAdapter = new Adapter();
console.log(cal.addAandB(1,2));
console.log(cal.minusAandB(5,7));
