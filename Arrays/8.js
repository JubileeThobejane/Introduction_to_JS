let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(object){
  
let odds = [];

return object.reduce((newArr , element) => {
  
  if (element.length % 2 !== 0){
    odds.push(element.length);
  }
  
  return odds;
},0 



);
 
}




console.log(oddLengths(arr)); // => [1, 5, 3]