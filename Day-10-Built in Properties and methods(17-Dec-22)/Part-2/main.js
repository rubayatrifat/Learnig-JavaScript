const num = [1, 2, 3, 4]

// Push
num.push(5)
console.log(num)

//Pop
num.pop()
console.log(num)

//unshift
num.unshift(0)
console.log(num)

//shift
num.shift()
console.log(num)


// Dinamic way to access arrays's last element


//Slice (Slice Do not change main array)

console.log(num.length - 1)

console.log(num.slice(7));
console.log(num.slice(1, 7));
console.log(num.slice());
console.log(num.slice(-6));
console.log(num.slice(-13, -6));
console.log(num.slice(-6, 11));
console.log(num.slice(11, 6));

console.log(num)

//Splice (Spice Change Main array)

console.log(num.splice(1, 2, 'Hello', 'Javascript'))
console.log(num)

//Join
console.log(num.join(' || '))

//Last Index of
console.log(num.lastIndexOf(4))

//Fill
console.log(new Array(5).fill('Rifat'))

//Is Array
console.log(Array.isArray(num))

//Reverse Array
console.log(num.reverse())

