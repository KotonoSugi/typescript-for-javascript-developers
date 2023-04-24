export{};

const debugProfile = (name:string,age:number) => {
  console.log({name,age})
};

debugProfile('Ham',43)

type Profile = Parameters<typeof debugProfile>; //引数の型を取り出すときに利用

const profile: Profile = ['Gloria',76];

debugProfile(...profile)//...で展開

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
  ) => any ? P : never