export{};

//シグネチャー
function double(value:number):number;
function double(value:string):string;

//引数をany型にする(関数の実態にはanyにする)型の指定はシグネチャーの役割
 function double(value:any):any{
  if(typeof value === 'number'){
    return value*2;
  }else{
    return value+value;
  }
 }
console.log(double("Go"));


