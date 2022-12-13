// Normal Function Practise

function multipli(){
    console.log(10 + 19)
}

multipli()

//Function With argument and perameter

function uProfile(uName, uemailAdd){
    console.log("Hi I am " + uName);
    console.log("My email address is " + '" ' + uemailAdd + ' "')
}

uProfile("Rubayat Islam Rifat", "rubayatislam17@gmail.com");

// Function with return key word

function aboutUser(useerName, age, progession, hobby){
    const userAbout = `Hello I am ${useerName}. I am ${age} years old. I am a ${progession}. I loves ${hobby}.`
    return userAbout
}

console.log(aboutUser("Rubayat", 12, "Web Devolper", "Playing Cricket"))