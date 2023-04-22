export{};

interface Profile{
  name:string;
  underTwenty:boolean;
  [index: string]:string | number | boolean;
}

let profile:Profile = {name:'Ham',underTwenty:false};


//インデックスシグネチャの書き方
//{ [index : typeForIndex]: typeForValue }

profile.name = 'Ham';
profile.age =43;
profile.nationality = 'Japan';

