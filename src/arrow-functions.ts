export{};

let bmi = (weight:number,height:number) :number=> {
  return weight / (height*height)
};

console.log(bmi(1.52,46));