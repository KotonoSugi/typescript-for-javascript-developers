export{};

//名前空間１
namespace Japanese{

  export namespace Tokyo{
    export class Person{
      constructor(public name:string){}
    }
  }
  //exportで外の空間からアクセスできるようにする
  
}
//名前空間２
namespace English{
  class Person{
    constructor(public firstName:string, public middleName:string, public lastName:string){}
  }
}
const me = new Japanese.Tokyo.Person("ham");
console.log(me.name);

