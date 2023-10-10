function numSize(num){
  if (num < 0){
    console.log(`${num} is less than 0`);
  } else if(num<=50){
    console.log(`${num} is between 0 and 50`); 
  } else if(num <= 100){
    console.log(`${num} between 51 and 100`); 
  } else {
    console.log(`${num} greater than 100`); 
  }
}

numSize;
numSize(25);
numSize(75);
numSize(125);
numSize(-5);

/* if (){
    console.log(`${num} is between 0 and 50`);
  } else if(num > 50 && num <= 100){
    console.log(`${num} between 51 and 100`); 
  } else if(num >100){
    console.log(`${num} greater than 100`); 
  } else if(num < 0){
    console.log(`${num} is less than 0`); 
  }*/