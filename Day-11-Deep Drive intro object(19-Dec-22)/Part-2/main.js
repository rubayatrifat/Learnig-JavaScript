// copy by value copy by refference

const a = 10
let b = a
b = 20
console.log(a, b)

// Copy by reffrence

const aObj = {
    uName: 'Rahim'
}
const bObj = aObj

bObj.uName = 'Rubayat'

console.log(aObj, bObj)

// Pass by value pass by reff

const c = 10

function passByValue(inputNum){
    let d = inputNum
    d = 20
    return d
}

console.log(passByValue(c))
console.log(c)

// Pass by reff

const cObj = {
    uName: 'Karim'
}

function passByReff(inputNum){
    let dObj = inputNum
    dObj.uName = 'Rahim'
    return dObj
}
console.log(passByReff(cObj));

console.log(cObj)

// Object copy assign

const myObj = {
    firstName: 'Rubayat Islam',
    lastName: 'Rifat',
    nameTitle: 'MD.',
    address:{
        country: 'Dhaka, Bangladesh'
    }

}

const copyObj = Object.assign({email: 'rubayat@gmail.com'}, myObj)
console.log(copyObj)
const chek = copyObj.address.country = 'London, England'

console.log(copyObj)

console.log(myObj)

// For this Problem we need to use json.stingify

//Deeply Object copy or json.stingify

const profile = {
  firstName: "Rubayat Islam",
  lastName: "Rifat",
  nameTitle: "MD.",
  address: {
    country: "Dhaka, Bangladesh",
  },
};

let personJson = JSON.stringify(profile);
console.log(personJson);
personJson = JSON.parse(personJson);
console.log(profile);

const change = personJson.address.country = "Sirajgong, Bangladesh"

console.log(personJson)

console.log(profile)

// Imutabble

const userName = 'Rubayat'

userName[1] = 'Rifat'
console.log(userName)

// Mutabble

// 1.Object
// 2.Array


