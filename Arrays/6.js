let arr = ['a', 'abcd', 'abcde', 'abc', 'ab', ];


function evenOddLengths(element){
  
  let elementsLength = element.map((value) => 
  value = value.length );
  
  let oddLength = elementsLength.filter((value) =>
  
  value % 2 !== 0
 );
 
 return oddLength ;
}




console.log(evenOddLengths(arr)); 