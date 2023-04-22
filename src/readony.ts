export{};

class VisaCard{
  //readonly owner : string;

  constructor(readonly owner:string){
    this.owner=owner;
  }
}

//インスタンスを作成
let MynumberCard = new VisaCard('はむさん');
console.log(MynumberCard.owner);
//MynumberCard.owner ="べーこん";



