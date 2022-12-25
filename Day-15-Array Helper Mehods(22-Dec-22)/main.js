// Map

const arr = [1, 2, 3, 4, 5]

const result = arr.map(function map(elm){
    console.log(elm)
    console.log(elm * 2)
    console.log(elm = 'Rifat') 
})

//  Filter

const arr2 = [386, 5860, 8697, 86874, 87953]


const result2 = arr2.filter((elm2) => {
    return elm2 % 2 === 0
})

console.log(result2)

//Find

const result3 = arr2.find(num => num % 2 === 0)

console.log(result3)

// Find Index

const result4 = arr2.findIndex(num => num % 2 === 0)

console.log(result4)

// Some

const result5 = arr2.some(num => num % 2 === 0)

console.log(result5)

// Every

const result6 = arr2.every(num => num % 2 === 0)

console.log(result6)

// Reduce

const arr3 = [1, 2, 3, 4, 5]

arr2.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc
})
