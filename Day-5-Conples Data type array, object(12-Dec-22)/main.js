// *** Array ***

let manTotho = ['Rifat', 'Islam', 12, 'Web Devoloper']

console.log(manTotho[1])

console.log(manTotho[0] + " " + manTotho[1]);

manTotho[4] = "Rubayat";

manTotho[0] = 'Rubayat'

console.log(manTotho[0] + " " + manTotho[1]);

console.log(manTotho)


let lasteleAray = manTotho.length - 1

console.log(manTotho[lasteleAray])

// *** Object ***

let firstObj = {
    firstName : 'Rubayat',
    lastName : 'Islam',
    age : 12
}
console.log(firstObj.firstName);
console.log(firstObj.firstName + ' ' + firstObj.lastName + ' is ' + firstObj.age )

// *** Templating String ***

console.log(`${firstObj.firstName} ${firstObj.lastName}`)