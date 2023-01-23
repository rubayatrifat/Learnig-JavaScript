// import { randomValue1 } from "./sum.js"
// OR
import ourSum, {randomValue1, randomValue2} from "./sum.js"
import substract from "./substract.js"
import multiple from "./multiply.js"

function allMix(mul, add) {
    return substract(3, 1) % multiple(4, 5) * mul + randomValue1 - randomValue2 + add
}

console.log(allMix(3, 20))

console.log(randomValue1)
console.log(randomValue2)
console.log(ourSum(1, 2))
console.log(substract(5, 3))
console.log(multiple(7, 5))

export default allMix
