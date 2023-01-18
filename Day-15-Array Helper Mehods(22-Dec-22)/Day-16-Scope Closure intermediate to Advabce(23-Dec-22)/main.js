// Scope
// Scope is 3 type's

// Scope's For Let And Const

// 1. Global Scope - Out Side of function scope and block scope
// 2. Fuction Scope - In Side of Function
// 3. Block Scope - in curlybreses {}

// Sope's For Var

// 1. Global Scope - Out Side of function scope.
// 2. Fuction Scope - In Side of Function


//Let And Const Scope Exemple:

// Global Scope

const globalScope = 30

// Function Scope

function functionScope(){
    const b = 20
    console.log(30)
}


functionScope()
// console.log(b) Output Is "b Is Not Defined"

// Block Scope

if(true){
    console.log('Hello World')
}

// We Do not access the variable from block scope or function scope that delear in function scope or block scope so that's a problem how can we solve it let's see


let a;
function myfuc(){
    a = 20;
}
myfuc()
console.log(a)

// Scope Chain

const x = 30

function scopeChain(){
    let y = 20
    function func(){
        let z = 10
        console.log(x)
        console.log(y)
        console.log(z)
    }
    func()
}

scopeChain()

// Closure Scope

function printName(){
    const firstName = "Rubayat Islam"
    return function(lastName){
        return firstName +" "+ lastName
    }
}

const userFullName = printName()

console.log(userFullName("Rifat"))



