
const subEle = document.querySelector('.price-num-submiter')
const proPrice = document.querySelector('.pro-price')
const proName = document.querySelector('.pro-name')
const proList = document.querySelector('.product-list')



function reciveInputs(){
    const inPrize = proPrice.value
    const inName = proName.value

    return{ inPrize, inName }
}

function alerts(name, price){
    let isValid = true

    // Emty alert
    if(name === "" || price === ""){
        isValid = false
        alert('Please Fill up the input Field')
    }

    // not number alert
    if(Number(price) !== Number(price)){
        isValid = false
        alert('Please Give a acurate number in prouduct price field')
    }

    return isValid
}



let allProduct = [

]

function addProductName(name, price){
    const product = {
        id: allProduct.length + 1,
        proName: name,
        proPrice: price,
    }

    allProduct.push(product)

    return product
}

function showProducttoUI(productInfo){
    proList.textContent = ""
    const {id, proName, proPrice} = productInfo

    const element = `<li data-productId="${id}">
                        <div class="product-info">
                            <strong>${proName}</strong> -
                            <span>${proPrice} T.K</span>
                        </div>
                        <div class="action-btn">
                            <i class="fa-solid fa-pencil edit-li"></i>
                            <i class="fa-solid fa-trash-can delet-li"></i>
                        </div>
                    </li>`

        proList.insertAdjacentHTML('afterbegin', element)

}

function updateProduct(resivedProduct){
    const updatedProducts = allProduct.map(product => {
        if(product.id === resivedProduct){
            return{
                ...product,
                name: resivedProduct.proName,
                price: resivedProduct.proPrice
            }
        }else{
            return product
        }
    })
    console.log(updatedProducts)
}


function subRecive(evt){
    // stop the page loading
    evt.preventDefault()

    // recive inputs
    const { inPrize, inName } = reciveInputs()
    
    // Allert recive
    const isValid = alerts(inName, inPrize)
    
    proPrice.value = ""
    proName.value = ""

    if(subEle.classList.contains('update-product')){
        const id = Number(document.querySelector('.update-product').dataset.id)

        const product = {
            id,
            proName,
            proPrice
        }
        const updatedPro = updateProduct(product)
        allProduct = updatedPro

        showProducttoUI(allProduct)

        return
    }
    
    if(!isValid) return
    

    
    const product = addProductName(inName, inPrize)

    showProducttoUI(product)

    
}

function getProductId(evt){
    const lielm = evt.target.parentElement.parentElement
    const id = lielm.getAttribute('data-productId')
    return id 
}

function removeitem(id){
    allProduct = allProduct.filter(product => product.id !== id)
}

function removeidformUI(id){
    document.querySelector(`[data-productId="${id}"]`).remove()
}

function findProduct(id){
    const foundPro = allProduct.find(product => product.id === id)
    return foundPro
}


function listToInput(product){
    proName.value = product.proName
    proPrice.value = product.proPrice

    subEle.textContent = "Update"
    subEle.classList.add('btn-scoundery')
    subEle.classList.add('update-product')

    subEle.setAttribute('data-id', product.id)
}

function handleManipulatepro(evt){

    const id = Number(getProductId(evt))

    if(evt.target.classList.contains('delet-li')){

       removeitem(id)

       removeidformUI(id)
    } else if(evt.target.classList.contains('edit-li')){
        const foundPro = findProduct(id)

        listToInput(foundPro)
    }
}

proList.addEventListener('click', handleManipulatepro)

subEle.addEventListener('click', subRecive)








