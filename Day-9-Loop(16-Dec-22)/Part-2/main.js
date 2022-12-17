//nested loop

for(let x = 0; x < 3; x++){
    console.log(x)
    for(let c = 0; c < 3; c++){
        console.log(c)
    }
}

// inteation string

const str = 'Rifat';
for(let i = 0; i < str.length; i++){
    console.log(i)
    console.log(str[i])
}

// Aray Loop

const arrayLoop = ['How', 'are', 'you']

for(let j = 0; j < arrayLoop.length; j++){
    console.log(j)
    console.log(arrayLoop[j])
}

// Object Loop or for of loop

const objectLoop = {
    nam : 'Rifat',
    age : 12, 
    profesion : 'webdevoloper'
}

for(let key in objectLoop){
    console.log(key)
    console.log(objectLoop[key])
}