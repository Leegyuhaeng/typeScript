interface ICity {
    name: string;
}
interface ISchool extends ICity {
    year: number;
}
// 이런식으로 조건부로 상속여부를 체크하여 type 을 조정할 수 있다
type ConditionType = ISchool extends ICity ? number : string;
const test:ConditionType = 1;


type ConditionType2 = ICity extends ISchool ? number : string;
const test2:ConditionType2 = "일";