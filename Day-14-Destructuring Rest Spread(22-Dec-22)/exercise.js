/* 
Exercise: 1 (4)
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

*/

function placeInMiddle(arr, vals){
    placeInMiddle([1,2,6,7],[3,4,5]) 
    placeInMiddle([1],[3,4,5]) 
    placeInMiddle([1,6],[2,3,4,5]) 
    placeInMiddle([],[2,3,4,5]) 
}

/* 
Exercise: 2 (3)
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together


*/
function joinArrays({email, firsName}){
    return `Hi I am ${firsName}. Contract With Me By- ${email}`
}

const profileObj = {
    firsName: 'Rubayat',
    email: 'rubayatislam17@gmail.com'
}

console.log(profileTwo(profileObj))

/* 
Exercise: 3 (4)
Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(per1, per2){
    return per1 + per2    
}
console.log(sumEvenArgs(5, 5))


/* 
Exercise: 4 (4)
you have given a object with some nested properties and method , you have to access the property and method in single statement(using destructuring)

Access city, getAddress from the object and console the output - 2
Get the correct output form by getAddress function calling .Ex: Dhaka-Bangladesh -2


*/

const obj = {
    name: 'samim',
    email: 'samimfazlu091@gmail.com',
    address: {
      location: {
        country: {
          name: 'Bangladesh',
          city: 'Dhaka',
        },
      },
      getAddress() {
        return this.country.city + '-' + this.country.name
      },
    },
  }

