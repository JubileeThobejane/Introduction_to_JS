
let rlySync = require('readline-sync');
let number = Number(rlySync.question("Enter an integer number to calculate factorial for\n"));

function factorial(number){
  if(number === 1){
    return 1;
  }
  return number * factorial( number -1);
}


  
 

console.log(factorial(number));