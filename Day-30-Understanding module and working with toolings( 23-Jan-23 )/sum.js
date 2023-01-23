const randomValue1 = 20
const randomValue2 = 20

function sum(num1, num2) {
    return num1 + num2
}

sum(1, 2)

// Main export
// named export

// export default sum
// OR
export { randomValue1, randomValue2, sum as default }