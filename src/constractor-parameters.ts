export{};

class Person {
  name:string;
  age:number;

  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("tarou",23);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;//引数の型が取り出せた

const profile:Profile = ["Ham",33];
const ham = new Person(...profile);
console.log(ham);
