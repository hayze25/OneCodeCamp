var globalVar = 3;

function localvar(){
  let  globalVar = 2;
  return globalVar;
}

console.log(localvar());