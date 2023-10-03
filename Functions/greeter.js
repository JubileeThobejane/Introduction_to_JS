
function getName(prompt){
  let rlySync = require('readline-sync');
  let name = rlySync.question(prompt);
  return name;
}
  
let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');


console.log(`Goodmorning , ${firstName} ${lastName} !`); 