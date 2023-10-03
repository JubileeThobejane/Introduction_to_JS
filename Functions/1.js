// The code will log 1 . Executing foo does not affect the output because 
//the first declaration of bar has a global scope 
//whereas the declaration found in foo has a local scope so they are not reffering
//to the same variable

let bar = 1;
function foo() {
  bar = 2;
}

foo();
console.log(bar);