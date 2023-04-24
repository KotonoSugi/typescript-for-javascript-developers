export{};

type DetailedProfile = {
  name : string;
  height : number;
  weight : number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>; //必要なものだけピックアップ
type SallProfile = Omit<DetailedProfile,'height'>;//除外するものを指定