function greed(per1 = 'Hi', per2 = 'Man'){
    return `${per1} ${per2}`    
}

console.log(greed('Hello'))
console.log(greed('Hello', 'Rubayat'))
console.log(greed(undefined, 'Rubayat'))

const arr = ['Rubayat', 'Obaydulla', 'Nela', 'Nurmone']

function loop(names){
    let outputName = ''
    const evrybodyName = "Name: "
    for(let name of names ){
        outputName += evrybodyName + name + ", ";
    }
    return outputName
}

console.log(loop(arr))

// First Class Function

let a = 10
let b = a

function ab(calculation){
    return 5 + calculation
}

console.log(ab(b))

// Stardard way

function calculate(num1, num2, action = squer){
    return action(num1, num2)
}
function plus(num1, num2){
    return num1 + num2
}
function minus(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function squer(num1, num2){
    return num1 ** num2
}

console.log(calculate(3, 2))

// Another

function myFunction(sum1){
    return function(sum2){
        return sum1 + sum2
    }
}

console.log(myFunction(5)(5))


