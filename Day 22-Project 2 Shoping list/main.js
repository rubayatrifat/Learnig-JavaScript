/*

1. Resive Doms
2. create a handle external function
3. now resive the values in externel function
4. call the function in handle sunbmit function
5. 

*/

const filterInputElm = document.querySelector('#filter')
const nameInputElm = document.querySelector('.nameInput')
const priceInputElm = document.querySelector('.priceInput')
const msgElm = document.querySelector('.msg')
const collectionElm = document.querySelector('.collection')
const form = document.querySelector('form')
const submitBtnElm = document.querySelector('.submit-btn button')


// Data Store
let products = localStorage.getItem('storeProducts') ? JSON.parse(localStorage.getItem('storeProducts')) : []

// This is input value resive function
function resiveInputs() {
   const name = nameInputElm.value
   const price = priceInputElm.value

   return { name, price }
}
// This Function is for clear messege some time leter
function clearMessege() {
    msgElm.textContent = ""
}

// This is Show Messge Function
function showMessege(msg, action = 'success') {
    const textMsg = `<div class="alert alert-${action}" role="alert">
    ${msg}
    </div>`
    msgElm.insertAdjacentHTML('afterbegin', textMsg)

    // Clear the alet some time leter
    setTimeout(() => {
        clearMessege()
    }, 2000)
}

// This is chake validate function
function validateInputs(name, price) {

    let isValid = true 

    // Chek input emty
    if (name === '' || price === '') {
        isValid = false
        showMessege ('Please Fill Out The Fields', 'danger')
    }

    // Chek is this price actual number
    if (Number(price) !== Number(price)) {
        isValid = false
        showMessege ('Please Provide price in number', 'danger')
    }
    return isValid
}

// This function is for input reset
function resetInput() {
    nameInputElm.value = ''
    priceInputElm.value = ''
}

// This is Add product Function in Data store
function addProduct(name, price) {
    const product = {
        id: products.length + 1,
        name,
        price: price
    }
    // information go on data store
    products.push(product)

    return product
}

// Show Product Into UI Function
function showProductToUI(productInfo){
    // to remove not item to show
    const notFoundMessElm = document.querySelector('.not-found-pro')
    if(notFoundMessElm){
        notFoundMessElm.remove()
     }

    const {id, name, price} =productInfo

        const elm = `<li data-productId="${id}"
        class="list-group-item collection-item d-flex flex-row justify-content-between"
    >
        <div class="product-info">
        <strong>${name}</strong>- <span class="price">${price} T.K</span>
        </div>
        <div class="action-btn">
        <i class="fa fa-pencil-alt float-right edit-product me-2"></i>
        <i class="fa fa-trash-alt float-right delet-product"></i>
        </div>
    </li>`

    collectionElm.insertAdjacentHTML('afterbegin', elm)

    showMessege('Product Added Sucsess fully')
}

function addProductToStorage(product) {
    let products

    if(localStorage.getItem('storeProducts')){

        products = JSON.parse(localStorage.getItem('storeProducts'))
        // Update and add the new product
        products.push(product)

        // Save to local store
        localStorage.setItem('storeProducts', JSON.stringify(products))
        
    }else{
        products = []
        products.push(product)
        localStorage.setItem('storeProducts', JSON.stringify(products))
    }
}

function updateProduct(reciveProduct){
   const updatedProducts = products.map(product => {
        if(product.id === reciveProduct.id) {
            return{
                ...product,
                name: reciveProduct.name,
                price: reciveProduct.price
            }
        } else{
            return product
        }
    })
    return updatedProducts
}

function clearEditForm() {
    submitBtnElm.classList.remove('update-btn')
    submitBtnElm.classList.remove('btn-secondary')
    submitBtnElm.removeAttribute('[data-id]')
    submitBtnElm.textContent = 'Submit'
}

function updateProductToStorage(product) {
    localStorage.setItem('storeProducts', JSON.stringify(products))
}

//This is handle submit function
function handleFormSubmit(evt) {
    // prevent browser realoading
    evt.preventDefault()

    // resive input
    const { name, price } = resiveInputs ()

    // Validate inputs
    const isValid = validateInputs(name, price)
    if (!isValid) return

    // Reset the input
    resetInput()

    if(submitBtnElm.classList.contains('update-product')){
        // User want to update the product
        console.log('update product')
        const id = Number(submitBtnElm.dataset.id)

        // Update Data to memory store
        const product = {
            id,
            name,
            price
        }
       const updatedProducts = updateProduct(product)
       // Memory Store
        products = updatedProducts

        // Local Sotrage
        updateProductToStorage(product)
        // Dom update
        showAllProductstoUI(products)

        // clear the edit state
        clearEditForm( )

        return
    } else{
        // Add Product into Datat Store
        const product = addProduct(name, price)

        // Add Data to local store
        addProductToStorage(product)

        // Show Product Into UI
        showProductToUI(product)
    }

}

// This funcltion is for catch the delet icon
 function getProductId(evt) {
    const liElm = evt.target.parentElement.parentElement
    const id = Number(liElm.getAttribute('data-productid'))
    return id 
 }

 // Only delet item function
 function removeItem(id){
   products = products.filter(product => product.id !== id)
 }

 // Remove Product in Dom function
 function remobeITemFormUI(id) {
    document.querySelector(`[data-productid="${id}"]`).remove()
    showMessege('Product Deleted Successfully', 'warning')
 }
 
 // Remove product form local storage function
 function removeProductFormStorage(id) {
    let products
    products = JSON.parse(localStorage.getItem('storeProducts'))
    products = products.filter(product => product.id !== id)

        localStorage.setItem('storeProducts', JSON.stringify(products))
 }

 function findProduct(id) {
    const foundProduct = products.find((product) => product.id === id)
    return foundProduct
 }

 function populateEditForm(product){
    nameInputElm.value = product.name
    priceInputElm.value = product.price

    // Change button submit
    submitBtnElm.textContent = 'Update'
    submitBtnElm.classList.add('btn-secondary')
    submitBtnElm.setAttribute('data-id', product.id)
    submitBtnElm.classList.add('update-product')

 }

// This Functio for delet from list of product
function handleManipulatProduct(evt){
    const id = getProductId(evt)
    if (evt.target.classList.contains('delet-product')) {
        // get the product id
        // remove product form data store
        removeItem(id)

        // remobe item form local store
        removeProductFormStorage(id)

        // Remobe product form UI
        remobeITemFormUI(id)
    }else if(evt.target.classList.contains('edit-product')) {
        // Finding the product
       const foundProduct = findProduct(id)
       console.log(foundProduct)
       // Potpulate exasting form in edit state
       populateEditForm(foundProduct)
    }
}

function showAllProductstoUI(products){
    collectionElm.textContent = ''
    // Looping
    let liElm

    liElm = products.length === 0 ? '<li style="color: red; list-style: none; text-align: center;" class="not-found-pro">No Products To show .</li>' : ''

    products.forEach(product => {
        const {id, name, price} = product

        liElm += `<li data-productId="${id}"
        class="list-group-item collection-item d-flex flex-row justify-content-between"
    >
        <div class="product-info">
        <strong>${name}</strong>- <span class="price">${price} T.K</span>
        </div>
        <div class="action-btn">
        <i class="fa fa-pencil-alt float-right me-2 edit-product"></i>
        <i class="fa fa-trash-alt float-right delet-product"></i>
        </div>
    </li>`
    })
    collectionElm.insertAdjacentHTML('afterbegin', liElm)
}

function handleFilter(evt) {
    const text = evt.target.value
    // fillter the list
   const filteredProducts = products.filter(product => product.name.includes(text.toLowerCase()))

   showAllProductstoUI(filteredProducts)
}

document.addEventListener('DOMContentLoaded', () => showAllProductstoUI(products))
form.addEventListener ('submit', handleFormSubmit)
collectionElm.addEventListener('click', handleManipulatProduct)
filterInputElm.addEventListener('keyup', handleFilter)
