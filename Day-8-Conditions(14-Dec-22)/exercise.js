/*

Exercise-1: Answer the following questions about this code block: (2)

const isLearning = true;
if(isLearning){
    console.log("Keep Learning");
} else {
    console.log("I hope you are learning....");
}

What should the above code console.log?

Ans Of exercise 1:
*/

const isLearning = true;
if (isLearning) {
  console.log("Keep Learning");
} else {
  console.log("I hope you are learning....");
}

//Exercise-2:Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own? (2)

/*

isLernig works because the isLearnig ver's value are true and if's value is also a truey value so it give us out put "Keep Learning"


Exercise-3:
Use both if and switch statement (6)
====================================================
age: less then 10  
output: stay home under your mom supervision

age: more and equal then 10 and less then 15 
 output: Try to gain knowledge from outside of home

age: more then and equal to 15 and less than 18
output: prepare to cast vote

age: more or equal then 18 
 output: cast you vote

age: unknown
  output: You are out of range

*/

const age = 09

if(age < 10){
    console.log("stay home under your mom supervision");
}else if(age >= 10 && age < 15){
    console.log("Try to gain knowledge from outside of home");
}else if(age >= 15 && age < 18){
    console.log("prepare to cast vote");
}else if(age >= 18 && age < 100){
    console.log(" cast you vote");
}else{
    console.log("You are out of range");
}

