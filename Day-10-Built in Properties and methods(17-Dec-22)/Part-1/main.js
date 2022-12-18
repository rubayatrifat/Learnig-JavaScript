// Javascript Built in properties

const str = ' Hello World '

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.indexOf('l'))
console.log(str.lastIndexOf('l'))
console.log(str.includes('Hell'))
console.log(str.startsWith('World '))
console.log(str.endsWith('World '))


const trim = str.length
console.log(trim)
// trimStart and trimEnd

// Slice
console.log(str.slice(7))
console.log(str.slice(1, 7))
console.log(str.slice())
console.log(str.slice(-6))
console.log(str.slice(-13, -6))
console.log(str.slice(-6, 11))
console.log(str.slice(11, 6))

//Substirng
console.log(str.substring(11, 6))
console.log(str.substring(0, 7))
console.log(str.slice(-6, 4));

//Split
console.log(str.split(' '))

//Concat
console.log(str.concat(` I am Rifat`))

//chartAt
console.log(str.charAt(3))

//charCodAt
console.log(str.charCodeAt(3))

//Seach
console.log(str.search('l'))

//Replace
console.log(str.replace('World', 'Javascript'))

//Pad
console.log(str.padEnd(15, '*'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

const num = 356.8475
console.log(num.toFixed(2))

//NaN
console.log(NaN === NaN)
console.log(1 === 1)

console.log(isNaN(1))
console.log(isNaN(-1))
console.log(isNaN(384.934))
console.log(isNaN(true))
console.log(isNaN(false))

