/* 

Exercise: 01

1.Suppose you are presenting yourself to a interview Board.Write down some information about yourself Create the following variables(5):

Uname, which is a string set to your current name ex: samim, Adnan, Jhair
email, which is a string set to your current email. ex: samimfaz@gmail.com
age, which is a number set to your current age. ex: 30, 40, 25
isDeveloper, which is a boolean set to developer status. ex: true ,false
goingToBeDesigner, set value to absolute negative. ex: null, undefined

*/

// Ans Of Exercise: 01

let Uname = "Rifat";
let email = "rubayatislam1@gmail.com"
let age = 12 ;
let isDevoloper = true;
let goingToBeDesigner = "is not";

/*




Exercise: 02

Form a sentence and print on console by using above variable.<variableName> part will be replaced by variable value(6):

Hey it's me "<name>". I am <age>.you can contact me by this <email>.I am a Developer and it's <isDeveloper>. I am going to be a Designer-<goingToBeDesigner>

*/

// Ans Of Exercise: 02

console.log(
  "Hey it is me " +
    Uname +
    "." +
    " I am " +
    age +
    "." +
    " you can contact me by this " +
    email +
    ". I am a Developer and it is " +
    isDevoloper +
    ". I am going to be a Designer-" +
    goingToBeDesigner
);           

// Another Ans Of Exercise: 02

console.log(`Hey it's me ${Uname}. I am ${age}. you can contact me by this ${email}. I am a devoloper ${isDevoloper}`);


console.log(typeof (NaN))

/* 

Basic Question

3.See what happens when you have multiple variables of the same name. Which one takes precedence?(2)
4.What is the difference between null and undefined? (3)
5.What is NaN in JavaScript? What is the typeof NaN? (2)
6.You can declare a variable by typing let thing;. What is the value of thing?(2)

*/


/*

Ans Of Question 03: When I take the same name of variables the variables are overnighting. The last variable takes precedence.

Ans Of Question 04: When the variable is not intentionally assigned a value it is called null and when the variable is not intentionally assigned a value it is called an undefined variable.

Ans Of Question 05: NaN's Full Meaning is "Not a Number". But the funny thing is when we see the type of NaN it gives us the output Number.

Ans Of Question 06: When I Diclear a variable 

let thing;
Thes time it's value is undefiend. because we Do not defined the value of 

let thing;

*/
