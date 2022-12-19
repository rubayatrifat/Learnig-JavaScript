// Object Deep Drive

const profile = {
    firstName: 'Rubayat Islam',
    lastName: 'Rifat',
    email: 'rubayatislam17@gmail.com',
    fullName(){
        return this.firstName + " " + this.lastName
    },
    contract(){
        const conMess = "Contract with me by it "
        return conMess + '"' + this.email + '"' 
    },
    fullMess(){
        return (
          "Hi I am " + this.fullName() + ". " + this.contract() + "."
        );  
    }
}

console.log(profile.firstName)
console.log(profile.lastName)
console.log(profile.email)

console.log(profile.fullName())

console.log(profile.contract())

console.log(profile.fullMess())

//Dinamacly access property

const myVar = 'email'
console.log(profile.myVar)
//Right tecniq is :
console.log(profile[myVar])

for(let key in profile){
    console.log(key)
    console.log(profile[key])
}

// call

function greed(myName){
    console.log(this);
    return `${this} ${myName}`;
}

console.log(greed.call("Hi", "Rifat"));



