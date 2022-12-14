// If Else

let age = 110;

if(age >= 18 && age < 110){
    console.log("You Can Give Vote.")
}else if(age >= 110){
    console.log("May Be Your Information is incorrect.") 
}else{
    console.log("You Do not Give Vote")
}

// Swich

let lucyNum = 9
switch (lucyNum) {
    case 5:
        console.log("If You Add 2 only You will Win");
        break;
    case 4:
        console.log("If You Add 3 only You will Win");
        break;
    case 7:
        console.log("You are the lucky man");
        break;
    case 3:
        console.log("If You Add 4 only You will Win");
        break;
    default :
        console.log("Sorry, Try Again")     
}

// Ternary

const num = 100

const result = num < 33 || num > 100 ? "You are Fail" : "You are Pass";
console.log(result)

