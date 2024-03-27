//In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];//4

let array2 = [1];
array2.length = 5;//5

let array3 = [];
array3[-1] = [1];//1 , correct answer - 0 only index values (0,1,2,3 etc) count
//towards the length of the array

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;//5 , correct answer -3 when you set the length of an array to
//a length that is shorter than the current length , it truncicates the array. In
//this case JS trunicates the length by removing the last two elements

let array5 = [];
array5[100] = 3;//101