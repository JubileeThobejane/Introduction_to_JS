let arr = [3,5,7];

const initialValue = 0 ;
/*const sum = arr.reduce((accumulator ,currentValue) =>
accumulator + (currentValue * currentValue) , initialValue
);

console.log(sum);*/

function   sumOfSquare(value) {
  
  return value.reduce((accumulator, currentValue) => {
    //console.log(accumulator);
    return accumulator +  currentValue * currentValue } ,initialValue
  );
  
}

console.log(sumOfSquare(arr));