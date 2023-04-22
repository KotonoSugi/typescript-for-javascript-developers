export{};

class Mahotsukai{}
class Souryo{}


class Taro extends Mahotsukai{}

interface Kenji{
  ionazun():void;
}

interface Senshi{
  kougeki():void;
}

//2つ以上のクラスを実装(継承)する場合
class Jiro implements Kenji,Senshi{
  ionazun(): void {
    console.log('ionazum');
    
  }
  kougeki(): void {
    console.log('kougeki');
    
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();