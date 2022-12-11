// *** Strign Deta Type ***

console.log(typeof 'Hello Js')
console.log(typeof "Hello Js");
console.log(typeof "100");

// *** Number Deta Type ***

console.log(typeof 100);
console.log(typeof -10);
console.log(typeof 20.35);

// *** Bolean Deta Type ***

console.log(typeof true)
console.log(typeof false)

// *** Symbol Deta Type ***

Symbol('rand-1')
Symbol("rand-2");

console.log(typeof Symbol('rand-1'))
console.log(typeof Symbol("rand-2"));

// *** Big Int Deta Type ***

1034n
10n;

console.log(typeof 1034n)
console.log(typeof 10n);

// *** Variable, Let and Const ***

// Var Problem

var personName = 'Rifat';
var personName = 'Islam';
console.log(personName);
//there is problem of var . It is overwrite the value of same name of var.
// so, we will not use var

// Let

let firtName = 'Rifat';
let lastName = 'Islam';

console.log(firtName + " " + lastName);

// const

const pofetion = "web devoloper";

console.log(firtName + " " + lastName + " is a " + pofetion);

/* Note : If You Use let you can chang the value of let 

ex: let perName = rifat;
    perName = obaydul;
    so out put is obaydul

if you use const you do not chang the value of const    

*/

//templatitg string

console.log(`${firtName} ${lastName} is a ${pofetion}`);