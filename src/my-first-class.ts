export{};

//クラス
class Person{
  //型の定義
  name: string;
  age: number;
  //コンストラクタメソッド(インスタンスの初期化処理)　コンストラクタはreturnしないため、戻り値はいらない
  constructor(name:string,age:number){
    this.name =name; //実態の名前を設定できる
    this.age = age; //実態の名前を設定できる
  }

  //メソッドの追加 (関数)
  profile():string{
    return `name: ${this.name},age: ${this.age}`;
  }
}
let taro = new Person('Taro',33);//taroはインスタンス(実態)
console.log(taro.profile());

// let hanako =new Person();



