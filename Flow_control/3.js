
function evenOrOdd(num)
{
  if(!Number.isInteger(num))
  {
    console.log('Error : The number is not and integer number');
    return ;
  }
  else if(num % 2 === 0)
  {
    console.log('Even');
  }
  else
  {
    console.log('Odd');
  }
}

evenOrOdd(5);
evenOrOdd(2.5);