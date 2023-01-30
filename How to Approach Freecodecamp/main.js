const arr = [undefined, 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday']

function printday(dayNum) {
    return arr[dayNum]
}

console.log(printday(6))


function lastElm(arr) {
    const lastElmIndex = arr.length - 1
    console.log(arr[lastElmIndex])
}

lastElm([1, 93, 8743, 8794, 957, 8906, 89067, 849])
lastElm(['Apple', 'Orange', 'Grape', 'Papaiya', 'Mango', 'Jackfruit'])
lastElm(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday'])
