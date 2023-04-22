export{};

//*owner
//  *所有者
//  *初期化時に設定できる、途中で変更不可

//*secretNumber
//  *初期化時に設定できる、途中変更可能

class MynumberCard{
  private _owner:string; //変更できないようにするためにprivate(参照不可のためほかで対応できるようにする)
  private _secretNumber:number;//参照不可に対応(途中変更ができなくなるためほかで対応)

  constructor(owner:string,secretNumber:number){
    this._owner=owner;
    this._secretNumber=secretNumber;
  }
  //ownerを参照するためのメソッド
  get owner(){
    return this._owner;
  }

  set secretNumber(secretNumber:number){
    this._secretNumber = secretNumber;
  }

  debugPrint(){
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MynumberCard('はむさん',12343456);
console.log(card.debugPrint());
card.secretNumber = 11111;
console.log(card.debugPrint());

