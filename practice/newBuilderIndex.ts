import {NewUserEntity, PostEntity} from "./newBuilder";

//Builder 패턴을 사용하면 class 를 만들때 어떤값이 들어가는지 명확하게 알수있다 (여러사람이 협업할때 명확한 class 내부를 알수있다)
const newUser = new NewUserEntity.Builder().name("LEE").age(27).marketing(true).build();
const newUser2 = new PostEntity.NewBuilder().title("hello").content("haha").author("TEST").build();

console.log(newUser);
console.log(newUser2);