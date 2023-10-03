
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');
/*the fxn foo is declared with 2 parameters, in it's body there are two console.log
statments which console log invokes console.log with each paramenter as and argument
on line 7 foo is invoked but only with one argument . The output will be Hello and undefined
*/