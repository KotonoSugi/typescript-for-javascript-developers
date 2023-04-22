export{};

//const echo = (arg:number) : number => {
//  return arg
//};
//
//const echo =(arg:string):string =>{
//  return arg
//};

//Tが抽象的な型を意味している
const echo =<T>(arg:T):T =>{
  return arg;
};

//型は手動指定しないといけない
console.log(echo<number>(100));


//関数のジェネリクス
class Mirror<T> {
  constructor(public value:T){}
    echo():T{
      return this.value;
   }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("Hum").echo());
