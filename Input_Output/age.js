let rlySync = require('readline-sync');
let age = Number(rlySync.question("How old are you ?\n"));

console.log('In 10 years you will be' +' ' + (age + 10) +' ' + 'years old');
console.log('In 20 years you will be' +' '+ (age  + 20) + ' '  + 'years old');
console.log('In 30 years you will be' + ' '+ (age + 30) + ' ' + 'years old');
console.log('In 40 years you will be' + ' ' + (age + 40) + ' ' + 'years old');