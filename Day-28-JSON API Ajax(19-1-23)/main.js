// JSON (Java Script Object Notation) - Data exchange format

// JS regular object
// const myObj = {
//     name: 'Rifat',
//     age: 13,
//     cell: '01912819245',
//     isDevoper: true,
//     fullName() {
//         return this.name
//     }
// }

// JSON Object

// const myJsonObj = {
//     "name": "Rifat",
//     "age": 13,
//     "cell": "01912819245",
//     "isDevoper": true
// }

const btnElm = document.querySelector('button')
const paraElm = document.querySelector('p')



function loadRandomJock() {

    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
        const category = data[3]
        return fetch(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        )
    })
    .then((response) => response.json()) 
    .then((data) => {
        paraElm.textContent = data.value
    }) 
    .catch((err) => console.log(err))

    // async function findJock() {
    //     try {
    //         const response = await fetch('https://api.chucknorris.io/jokes/random')
    //         const data = await response.json()
    //         console.log(data)   
    //     }catch (err){
    //         console.log(err)
    //     }

    // }
    
}

btnElm.addEventListener('click', loadRandomJock)