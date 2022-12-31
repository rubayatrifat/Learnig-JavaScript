// Document By ID
const byId = document.getElementById('main-menu')
console.log(byId)

// Document By Query Selector
const byQueryId = document.querySelector('#main-menu') 
console.log(byQueryId)

const byQueryClass = document.querySelector('.menu') 
console.log(byQueryClass)

const byQueryTag = document.querySelector('li') 
console.log(byQueryTag)

const byQueryAllTag = document.querySelectorAll('li') 
console.log(byQueryAllTag)

// Document By Class Name
const byClassName = document.getElementsByClassName('menu')
console.log(byClassName)

// Document By Tag Name
const byTagName = document.getElementsByClassName('nav')
console.log(byTagName)

// Document . Body
const byBody = document.body.children[1]
console.log(byBody)

// Get Atribute

const ulElm = document.querySelector('nav')
console.log( 'Class' + ' ' + ulElm.getAttribute('class'))

console.log( 'Data Item' + ' ' + ulElm.dataset.item)
