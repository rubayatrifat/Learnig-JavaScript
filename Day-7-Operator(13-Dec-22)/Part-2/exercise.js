/*

Exercise - 1 (What will be the result and explain why?) -3

const x = 10;
const y = "a"
y === "b" || x >= 10

*/
// Exercise -1 Ans:

let x = 10;
let y = "a"
console.log(y === "b" || x >= 10)

/*

 Exercise - 2 (What will be the result and explain why?)-3

const x = 3;
const y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y)


*/

// Ans Of Exercise:2

x = 3
y = 8

console.log(!(x == "3" || x === y) && !(y != 8 && x <= y));

/*

Exercise - 3(Check the value ans show output whether it's truthy or falsy ).What are the truthy and falsy value in Javascript -3

"Hello World" //true

"" //false

null //false

0 //false

-1 //true

NaN //false 

Ans Of edercise 3:
Falsey Value Are:
1.False
2.undefined
3.null
4.""
5.0
6.NaN

and other is truly value
*/