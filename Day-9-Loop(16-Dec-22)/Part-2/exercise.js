/*

Total Number-20
Try to use function as required

# Exercise-1 -2

let num = 1;
num = 3

now white a while lopp.
and what is it output ?

*/

let num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
}


/*
 
# Exercise-2(what will be the output and explain)-2

let num = 1

while(num <= 20) {
if(num % 4 === 0){
console.log(num);
}
num++;
}

*/

let num2 = 1;

while (num2 <= 20) {
  if (num2 % 4 === 0) {
    console.log(num2);
  }
  num++;
}
//explain: let num2 = 1; while er condetion e dawa ase num jotokkhon 20 er soman ken ba bis theke sorboccho vabe choto hobe totokhon loop ti cholbe tarpor if use kora hoyese abong 20 ke  4 dara vag kore vag sesber kora hoise tai er vagses hobe 0 abog 0 is === than 0 tai output hobe 0

/*

# Exercise-3(what will be the output and why?)-2

let num = 100;
while(num < 150) {
console.log(num + 1);
num--;
}

*/

// Ans of exer 3: It Out put will be a infinite loop. It's very dangeres loop. So, we do not use this loop

/*


Exercise-4:Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b - 3
function myFunction(a, b) {
return
}
myFunction('m', 'how many times does the character occur in this sentence?') //2
myFunction('h', 'how many times does the character occur in this sentence?') //4
myFunction('?', 'how many times does the character occur in this sentence?') //1
myFunction('z', 'how many times does the character occur in this se


*/

function myFunction(a, b){
    console.log(`${a} ${b}`)
    return
}

myFunction('m', 'how many times does the character occur in this sentence?') 
myFunction('h', 'how many times does the character occur in this sentence?') 
myFunction('?', 'how many times does the character occur in this sentence?') 
myFunction('z', 'how many times does the character occur in this sentence?')