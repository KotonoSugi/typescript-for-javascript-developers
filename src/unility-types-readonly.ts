export{};

type Profile = {
  name:string;
  age:number;
};

const me: Profile = {
  name:'Ham',
  age: 43
};

me.age++; //インクリメント

console.log(me);

type PersonlaDataType =Readonly<Profile>;

const friend: PersonlaDataType = {
  name :'shigeru',
  age:23
};

//friend.age++; // readonly型のためインクリメントできない

type Yomitori<T> = {
  readonly [P in keyof T] : T[P];
};

type YomitoriProfile = Yomitori<Profile>;