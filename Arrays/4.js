let myArray = [ 1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0,];

const evenOrOdd = myArray.map((num)=> {
  
  if(num % 2 === 0){
   return 'even';
  } else {
   return 'odd';
  }
});

console.log(evenOrOdd);

/*FOR LOOP

let evenOrOdd = [];

for(let i = 0; i<= myArray.length -1 ; ++i){
  if( myArray[i] % 2 === 0){
    evenOrOdd.push('even');
  } else {
    evenOrOdd.push('odd');
  }
}

console.log(evenOrOdd);*/