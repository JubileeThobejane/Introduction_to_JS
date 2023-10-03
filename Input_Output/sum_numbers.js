let rlSync = require('readline-sync');
console.log('This program will calculate the sum of 2 numbers you enter.')
let num1 = Number(rlSync.question("\nEnter the first number: "));
let num2 = Number(rlSync.question("\nEnter the second number: "));
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);