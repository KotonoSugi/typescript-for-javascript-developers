export{};

//Record<K,T> レコードを扱うときに重宝する型 Kにはユニオン型を指定
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Coxid19InfectionInfo = {
  kanji_name:string;
  confirmed_cases:number;
}

const codiv19Japan :Record<Prefectures,Coxid19InfectionInfo> = {
  Tokyo:{kanji_name : '東京',confirmed_cases:1960},
  Chiba:{kanji_name : '千葉',confirmed_cases:246},
  Tottori:{kanji_name : '鳥取',confirmed_cases:2},
}