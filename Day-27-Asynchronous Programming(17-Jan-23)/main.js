// ====== *** Some asynchronous task *** ======
/**
 * Sending API request
 * Reading or writing file
 * Save or maniupulate Database
 * Accessing data from database
 */

function one(fn) {
    setTimeout(() => {
        console.log('After 1 Scoundes')
        fn(1)
    }, 1000)
}

function two(fn) {
    setTimeout(() => {
        console.log('After 2 Scoundes')
        fn(2)
    }, 2000)
}

function three(fn) {
    setTimeout(() => {
        console.log('After 3 Scoundes')
        fn(3)
    }, 3000)
}

// They returns undefind. So, How can we solve it
console.log(one())
console.log(two())
console.log(three())

// Asynchronous function

    one((num) => {
        console.log (num)
    }) 

    two((num) => {
        console.log (num)
    }) 

    three((num) => {
        console.log (num)
    }) 

// Promise

function oneAgain() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 2000)
    })
}

// Promise Will completed in 3 ways
/**
 * Resoleve
 * Reject
 * Pending
 */

oneAgain()

.then((data) => {
    console.log(data)
})

.catch((err) => {
    console.log(err)
})



// console.log(oneAgain)
