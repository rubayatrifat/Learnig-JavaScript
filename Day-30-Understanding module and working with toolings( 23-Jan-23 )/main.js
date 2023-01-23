// Why we use module
/**
 * Variable overighting issue
 * Order issue
 * Multiple request (perfomence penalty)
 */

import allMix from "./main-math.js";

const allMixer = allMix(40, 60)

function superMix(add, sub) {
    return allMixer + add - sub
}

console.log(superMix (20, 50))



