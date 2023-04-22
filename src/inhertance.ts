export{};

class Animal{
  constructor(public name:string){}
  run():string{
    return 'I can run!';
  }
}

class Lion extends Animal{
  public speed :number;
  constructor(name:string, speed:number){
    super(name);

    this.speed = speed; //初期化処理（nameの初期化処理は親クラスが行う）
  }
  run(): string {
    //const parentMessage = super.run(); //親クラスのrunメソッドを実行
    return `${super.run()}  ${this.speed} km!`;
  }
}

//let animal =new Animal();
//console.log(animal.run());
//
//let lion = new Lion();
//console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("lion",124).run());

