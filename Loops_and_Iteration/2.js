
let rlySync = require('readline-sync');
let number = Number(rlySync.question("Enter an integer number to calculate factorial for\n"));

function factorial(number){
  let counter = 1;
  
  for(let n = 1; n <= number ; ++n){
    
    counter*=n;
  }
  
  return console.log(counter);
}

factorial(number);