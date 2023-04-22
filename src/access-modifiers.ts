export{};

//クラス
class Person{
  profile(): any {
    throw new Error("Method not implemented.");
  }
  //型の定義
  public name: string;//nameはアクセスできる(publicはアクセス修飾師)。書かないのが普通（規制しないため）
  protected age: number;//ageはアクセスできない(privateはアクセス修飾師) personクラスの内部だったらアクセスできる profileの内部処理はできる。
  //インスタンスはできない
  protected nationality:string;
  
  
  //コンストラクタメソッド(インスタンスの初期化処理)　コンストラクタはreturnしないため、戻り値はいらない
  constructor(name:string,age:number, nationality:string){
    this.name =name; //実態の名前を設定できる
    this.age = age; //実態の名前を設定できる
    this.nationality= nationality;
  }
}

  class Android extends Person{
    constructor(name:string,age:number, natinality:string){
        super(name,age,natinality)//親クラスのコンストラクタメソッドをりよう
    }
  

  //メソッドの追加 (関数)
    profile():string{
      return `name: ${this.name},age: ${this.age},nationality:${this.nationality}`;
    }
  }

let taro = new Person('Taro',33,'Japan');//taroはインスタンス(実態)
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
// let hanako =new Person();



