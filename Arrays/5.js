let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

/*const isInt = things.filter((item) => {
  if(Number.isInteger(item) === true){
    return item ;
  }
});

console.log(isInt);*/

function isInt(arr){
  return arr.filter((item) =>{
    if(Number.isInteger(item) === true ){
      return item;
    }
   
 });
}

console.log(isInt(things));