function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);
/* The fxn foo is declared with 2 parameters , in the fxn body there are 2 console.log
statments that take each of the parameters as arguments and on line 6 foo is invoked with 
1 extra argument , it will console log 42 , 3.1415 and the 3rd argument will be ignored since 
foo only has 2 parameters that are declared
*/