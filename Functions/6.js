function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;(num1, num2, num3)
  return result;
}

let product = multiplyNumbers(2, 3, 4);

/*
1. the function arguments - (2,3,4)
2. the function body -  {
  let result = num1 * num2 * num3;
  return result;
}
3. the function declaration - function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}
4. the function invocation - multiplyNumbers(2, 3, 4);
5. the function name - multiplyNumbers
6. the function parameters - (num1, num2, num3)
7. the function return value - result
8. the names of all variables in this program - multiplyNumbers(global),num1
num2,num3(local), result (local),product(global)
*/