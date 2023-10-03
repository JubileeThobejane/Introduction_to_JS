
let rlySync = require('readline-sync');
let firstName = rlySync.question("What's your first name?\n");
let lastName = rlySync.question("What's your last name ?\n");

console.log(`Goodmorning ${firstName} ${lastName}!`);