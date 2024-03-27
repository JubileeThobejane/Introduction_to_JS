let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];


function findReplace(array){
  for(let i=0 ; i<array.length ; ++i){
    for(let j= 0 ; j < array[i].length ; ++ j){
      if (array[i][j] === 6 ){
        array[i][j] = 606 ;
      }
    }
  }
}

findReplace(arr);