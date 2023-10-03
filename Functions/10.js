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
 Line 2- product (local) 
 Line 6- getNumber(global), prompt(local)
 Line 7- parseFloat(global) , question(global)
 Line 10-left(global)
 Line 11-right(global)
 Line 12-console(global)
 
*/