export{};

class Me{
  static isProgrammer:boolean =true;//初期化も行う
  static firstName:string ="kotono";
  static lastName:string = "sugimoto";

  //メソッド
  static work(){
    //firstnameの情報を参照して、埋め込む
    return `Hey guys! This is ${this.firstName}`;
  }


}

//let me = new Me();
//console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());

