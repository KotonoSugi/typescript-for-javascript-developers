export{};

type Profile = {
  //必須のプロパティ
   name:string;
   age?:number;
   zipCode:number;
};

//すべてがオプショナルな型となる
type PatialType = Partial<Profile>;

//すべての型が必須の型(オプショナル設定していても必須)
type RequiredType = Required<Profile>;