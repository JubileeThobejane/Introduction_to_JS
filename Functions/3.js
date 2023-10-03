
function getNum(prompt){
  let rlySync = require('readline-sync');
  let num = parseFloat(rlySync.question(prompt));
  return num;
  
}

let num1 = getNum('Enter the first number:');
let num2 = getNum('Enter the second number:');

function multiply(num1 ,num2){
  return num1 * num2;
}

console.log(`${num1} * ${num2} = ${multiply(num1,num2)}`);