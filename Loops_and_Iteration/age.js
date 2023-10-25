let rlySync = require('readline-sync');
let age = Number(rlySync.question("How old are you ?\n"));

for(let year = 10 ; year <= 40 ; year+=10){
  console.log(`In ${year} you will be ${age + year} years old `);
}

