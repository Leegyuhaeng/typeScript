function printType(params) {
    console.log(typeof params);
}
printType("아무거나");
printType(23);
printType({});
// function prt 에서 제네릭<string> 을 넘겨주고 interface 에서 이값을 params 로 받아 작업을 한다
function prt(params) {
    console.log(params);
}
prt({ data: 'test', array: ['string', 'string'], number: 1, arr: [1, 2, 3] });
