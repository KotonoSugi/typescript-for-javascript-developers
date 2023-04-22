export{};

type Mojiretsu = string; //別名の名前(別名ははじめは大文字にする)

const fooString: string ='Hello';

const fooMojiretsu: Mojiretsu ='Hello';

const example1={
  name:'Ham',
  age:43
};

type Profile= {
  name:string;
  age:number;
};

const example2: Profile={
  name:'Ham',
  age:43
};

type Profile2 = typeof example1;