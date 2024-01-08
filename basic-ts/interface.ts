interface IPerson {
    name: string;
    age: number;
    city?: string;
}

const man: IPerson = {
    name:"LEE",
    age:25,
    city:"city",
}
// -----------서버-------------
function prt(params: IPerson) {
    console.log(params?.city ?? "default");
}
prt(man);