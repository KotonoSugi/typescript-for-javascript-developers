export{};

type Profile = {
  name:string;
  age:number;
};

type PatialProfile = Partial<Profile>;

type PropertyTypes = keyof Profile;

//Partialで同じ型を自分で作れ、カスタマイズできる(今回はnullを追加)
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};


type OptionalProfile = Optional<Profile>;
