//Math

const math = -12.92475

console.log(Math.trunc(math))
console.log(Math.ceil(math))
console.log(Math.floor(math))
console.log(Math.round(math))
console.log(Math.pow(3, 2)) // 3 * 3
console.log(Math.random())
console.log(Math.max(967794, 97854, 95757, 95740))
console.log(Math.min(967794, 97854, 95757, 95740))

// Random Real rules 

const realRandom = Math.ceil(Math.random() * 10)

console.log(realRandom)

// Find A random numsber form 2 - 6

function myRandom(num1, num2){
    return Math.ceil(Math.random() * Math.abs(num1 - num2) + num1)
}

const callRan = myRandom(2, 6) 

console.log(callRan)

// Date
const date = new Date()
console.log(date)

console.log(date.toString())
console.log(date.toISOString())
console.log(date.toUTCString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleDateString())


console.log(date.getDay() + 1)
console.log(date.getSeconds())
console.log(date.getMinutes())
console.log(date.getHours())
console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())


// degital colock

function degitalClock(){
    const dDate = new Date()
    let hours = dDate.getHours()
    const minitus = dDate.getMinutes()
    const seconds = dDate.getSeconds()
    hours  = hours > 12 ? hours - 12 : hours
    fonmatHours = hours >= 10 ? hours : '0' + hours
    fonmatMinitus = minitus >= 10 ? minitus : '0' + minitus
    fonmatSecound = seconds >= 10 ? seconds : '0' + seconds
    return `${fonmatHours} : ${fonmatMinitus} : ${fonmatSecound}`
}

const timer = setInterval(() =>{
    console.log(degitalClock())
}, 1000)


console.log(timer)

