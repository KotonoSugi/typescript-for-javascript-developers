export{};

abstract class Animal{
  abstract cry():string;//抽象メソッド
}
//継承
class Lion extends Animal{
  cry() {
    return "roar";
  }
}

//抽象クラスのメソッドがないとエラーになる（実装漏れを防げる）
class Tiger extends Animal{
 cry(): string {
   return "gao";
 }
}

