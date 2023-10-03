function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
 Line 1- multiply(global), left,right (local)
 Line 2- product (local) , left , right
 Line 3- product
 Line 6- getNumber, prompt
 Line 7- parseFloat , question, prompt(built in fxn so names are variables)
 Line 10-left(global),getNumber
 Line 11-right(global),getNumber
 Line 12-console , right, multiply , left(local), right(local)
 
*/