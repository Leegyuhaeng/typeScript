interface IUser {
    name: string;
    age: number;
}

interface IBook {
    title: string;
    price: number;
}
interface ICart {
    userName: string;
    bookName: string;
}

interface IUserCartService {
    user: IUser;
    book: IBook;
    cart: ICart;
}

// interface 들을 IUserCartService 안에 모아두고 아래와같이 IUserCartService 에서 키값으로 해당 interface type 을 선택할수있다

function prtUser(params: IUserCartService['user']) {
    console.log(params);
}
prtUser({name: 'name', age: 25});

function prtBook(params: IUserCartService['book']) {
    console.log(params);
}
prtBook({title: 'name', price: 25});

function prtCart(params: IUserCartService['cart']) {
    console.log(params);
}
prtCart({userName: 'userName', bookName: 'bookName'});