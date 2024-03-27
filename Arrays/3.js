let myArray = [[1, 3, 6, 11], [4, 2, 4],[9, 17, 16, 0],];


let evenNum =[];


for(let i=0; i<=myArray.length-1; ++i){
  
 
  
  for(let j=0; j<=myArray[i].length-1; ++j){
    
    let element = myArray[i][j];
    
    if(element % 2 === 0){
      evenNum.push(element);
    } 
  }
  
  console.log(' ');
}

console.log(evenNum);


