export{};

type Pitcher1 = {
  throwingSpeed : number;
};

type Batter1 ={
  battingAverage:number; //打率
};

const DaimajinSasaki : Pitcher1 = {
  throwingSpeed:154
};

const Ochiai:Batter1={
  battingAverage:0.367
};

// type TwoWayPlayer = {
//   throwingSpeed : number;
//   battingAverage:number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani:TwoWayPlayer = {
  throwingSpeed:160,
  battingAverage:0.3
};