/*

Write A Program that prits the number 1 to 100. But multiple for 3 print "Fizz" insterd of the number and for multiple for 5 print "Buzz" for number which are multiple of both three and five print "FizzBuzz"

*/

function fizzAndBuzz(num){
    let result = ''

    for(let oneToHun = 1; oneToHun <= num; oneToHun++){

        if(oneToHun % 3 === 0 && oneToHun % 5 === 0){
            result += 'FizzBuzz \n'
        }else if(oneToHun % 3 === 0){
            result += 'Fizz \n'
        }else if(oneToHun % 5 === 0){
            result += 'Buzz \n'
        }else{
            result += oneToHun + "\n"
        }
    }
    return
}

console.log(fizzAndBuzz(100))