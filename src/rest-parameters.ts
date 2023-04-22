export{};

const reducer =(accumulator:number,currenValue:number) =>{
  //console.log({accumulator,currenValue});
  return accumulator+currenValue;
};

const sum = (...values: number[]):number => {
  return values.reduce(reducer);
};

console.log(sum(1,2,3,4,5));

//[1,2,3,4].reduce(reducer);