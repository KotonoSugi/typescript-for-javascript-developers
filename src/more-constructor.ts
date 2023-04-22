export{};

class Person{
  //アクセス修飾子をつけることで初期化処理も行う
  constructor(public name:string,protected age:number){
  }
}

const me  = new Person('ハムさん',23);
console.log(me);
