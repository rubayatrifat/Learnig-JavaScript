/*

1.Exercise-1 (3) 
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  return
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) //false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //true
myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //false
*/

function myFunction(a, b) {
        if(a === b){
        console.log("It's True")
    }else{
        console.log("False")
    }

    return a, b;
}
  

myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00")); 
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00")); 
myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"));

/*
2.Exercise-2 (3)
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  return

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) //false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //true
myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //false
*/

function myFunction(a, b) {
  if (a === b) {
    console.log("It's True");
  } else {
    console.log("False");
  }

  return a, b;
}

myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"));
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"));
myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"));

/*
3.Exercise-3 (3)
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
  return
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) //true
myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')) //false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) //false

*/

function myFunction(a, b) {
    if(a > b){
        console.log("True")
    }else{
        console.log("false")
    }
  return;
}

myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00")); 
myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:00:00")); 
myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"));

/*

4.Exercise-5 (5)

//Generate a Random Number between two values
//Number must be a full Number (not fraction)
//endNum must be exclusive


function generateRandomNum(startNum, endNum){

}

generateRandomNum(5, 10) 
*/

function generateRandomNum(startNum, endNum) {
    const realRand = Math.ceil(Math.random() * Math.abs(startNum - endNum) + startNum)
    return realRand
}

const callRand = generateRandomNum(5, 10); 
console.log(callRand);
                          