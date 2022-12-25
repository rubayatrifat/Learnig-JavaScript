// Destruckturing

// Array Destructuring

const profile = ['Rubayat Islam', 'Rifat', 13, true, 'Front end and back end devoloper']

const [firstName, lastName, age, isLearner, profession] = profile

console.log(`Hi I am ${firstName} ${lastName}. I am a JS lerner. It's ${isLearner}.  I am also a ${profession}`)

// Rest Opretor

const [fname, ...restvalue] = profile

console.log(fname)
console.log(restvalue)

// Sperad Operetor

const homeProfile = ['Samim', 'MD.', ...profile]

console.log(homeProfile)



function profileTwo({email, firsName}){
    return `Hi I am ${firsName}. Contract With Me By- ${email}`
}

const profileObj = {
    firsName: 'Rubayat',
    email: 'rubayatislam17@gmail.com'
}

console.log(profileTwo(profileObj))


 // Optional Chaining


const myObj = {
    uName: "Rubayat",
    address: {
        city:{
            road: "#7"
        }
    } 
}

const result = myObj.address?.city?.road

console.log(result)


