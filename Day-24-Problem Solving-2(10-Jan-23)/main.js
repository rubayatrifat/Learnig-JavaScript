/**
 *****========= All Problems Here ========*******

 * 1. Fizz Buzz // Done
 * 2. Adding sum from an array // Done
 * 3. Finding out max or min sum // Done
 * 4. String reversal // Done
 * 5. max charecter and charecter count // Done
 * 6. int revarsal // Done
 * 7. reverse array // Done 
 * 8. palindrom // Done
 * 9. compare tow array // Done
 * 10. anagram 
 * 11. vowels 
 * 12. array chunking
 * 13. carcer cipher
 * 14. capilataizetion
 * 15. step pattern
 * 16. two sum
 * 18. spiral
 * 19. Ranson notes  
 */

/*
Problem 1: Fizz Buzz

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
    return result
}

console.log(fizzAndBuzz(100))


/* 
Problem 2: Adding sum from an array

You have been provide an array of number. You have to sum the numbers
*/

function sum(arr) {
    let sum = 0
    for (let num of arr) {
        sum += num
        console.log(num)
    }
}

sum([10, 20, 5, 7, 15]) 

/*
Problem 3: Finding out max or min sum 

You have to find maxcimam and mnimum number
*/
// Min Number

function min(arr) {
    let min_num = arr[0]
    for (let num of arr) {
        if(num < min_num){
            min_num = num
        }
    }
    console.log(min_num)
}

min([10, 20, 5, 7, 15, -23, -2]) 

// Max Number

function max(arr) {
    let max_num = arr[0]
    for (let num of arr) {
        if(num > max_num){
            max_num = num
        }
    }
    console.log(max_num)
}

max([10, 20, 5, 7, 15, -23, -2]) 

// Problem 4: Reverce the String

function reverce(str) {
    for(let i = str.length - 1; i >= 0; i-- ){
        console.log (str[i])
    }


}

reverce('hello')
