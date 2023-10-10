function upperOrLower(input){
  if(input.length > 10){
   return input.toUpperCase();
  } else{
   return input;
  }

}

console.log(upperOrLower('hello world'));
console.log(upperOrLower('goodbye'));
console.log(upperOrLower('jubilee'));