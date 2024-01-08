// 아래 function 처럼 key 를 받는 타입에 keyof 를 사용하면 해당 인터페이스에 키값만 넣을수 있게 되어서 인자값 오타나 다른값을이 못들어오게 사전에 차단한다
function prt(params, key) {
    console.log(params[key]);
}
prt({
    title: 'title',
    publisher: 'publisher',
    price: 1000,
    author: 'author',
}, 'title');
