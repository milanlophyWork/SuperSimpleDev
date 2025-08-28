
import { cart,removeFromCart,calculateCartQuantity,updateQuantity } from "../data/cart.js"; 
import {products} from '../data/product.js';   
import { formatCurrency } from "./utils/money.js"; 

let cartSummaryHTML = ''
updateCartQuantity() // Ans 1 [to display on loading the page]

cart.forEach((cartItem)=> {

    const productId = cartItem.productId 

    let matchingProduct

    products.forEach((product)=> {
        if(product.id === productId){
            matchingProduct = product
        }
    });


    cartSummaryHTML += `
        <div class= "cart-item-container 
        js-cart-item-container-${matchingProduct.id}">
            <div class= "delivery-date">

            </div>

            <div class= "cart-item-details-grid">
                <img src = "${matchingProduct.img}" class= "product-image">
                
                <div class= "cart-item-details">
                    <div class= "product-name">
                        ${matchingProduct.name}
                    </div>

                    <div class= "product-price">
                        $${formatCurrency(matchingProduct.priceCents)}
                    </div>

                    <div class= "product-quantity">
                        <span>
                            Quantity: <span class= "quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                        </span>

                        <span class="update-quantity-link link-primary
                        js-update-link" data-product-id = "${matchingProduct.id}">
                            Update
                        </span>

                        <input class= "quantity-input js-quantity-input-${matchingProduct.id}" placeholder= "Ans5">
                        <span class= "save-quantity-link link-primary js-save-link" data-product-id = ${matchingProduct.id}>Save</span>

                        <span class="delete-quantity-link link-primary js-delete-link" 
                        data-product-id="${matchingProduct.id}">
                            Delete
                        </span>
                    </div>
                </div>

                <div class= "delivery-options">
                    <div class= "delivery-options-title">
                        Choose a delivery option:
                    </div>

                    <div class= "delivery-option">
                        <input type = "radio" class="delivery-option-input" name= "delivery-option-${matchingProduct.id}">

                        <div>
                            <div class= "delivery-option-date">
                                Tuesday, June 21
                            </div>

                            <div class="delivery-option-price">
                                FREE Shipping
                            </div>
                        </div>
                    </div>

                    <div class= "delivery-option">
                        <input type = "radio" class= "delivery-option-input" name="delivery-option-${matchingProduct.id}">

                        <div>
                            <div class= "delivery-option-date">
                                Wednesday, June 15
                            </div>

                            <div class= "delivery-option-price">
                                $4.99 - Shipping
                            </div>
                        </div>
                    </div>

                    <div class= "delivery-option">
                        <input type= "radio" class= "delivery-option-input" name= "delivery-option-${matchingProduct.id}">
                        
                        <div>
                            <div class= "delivery-option-date">
                                Monday, June 13
                            </div>

                            <div class= "delivery-option-price">
                                $9.99 - Shipping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

})

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML

document.querySelectorAll('.js-delete-link')
    .forEach(link => {
        link.addEventListener('click', ()=> {
            const productId = link.dataset.productId    
            removeFromCart(productId) 
            const container = document.querySelector(   
                `.js-cart-item-container-${productId}` 
            )
            container.remove()  
            updateCartQuantity() // Ans 2
        }) 
    })

function updateCartQuantity(){ 
    const quantity = calculateCartQuantity()    // Ans 1
    document.querySelector('.js-return-to-home-link').innerHTML = `${quantity} items` 
}


// Ans 4 // Updating the quantity on clicking update button

document.querySelectorAll('.js-update-link') // Accessing all update links
    .forEach((link)=> {
        const productId = link.dataset.productId // Accessing the productId of each link
        link.addEventListener('click', ()=> {
            // console.log(productId)  // Adding a click event listener to each link and consoling the productId.
            document.querySelector(`.js-cart-item-container-${productId}`)
                .classList.add('is-editing-quantity') // Ans 6
        })
    })

// Ans 9 // Switching between update and save

document.querySelectorAll('.js-save-link')
    .forEach((link)=> {
        const productId = link.dataset.productId

        link.addEventListener('click', ()=> {
            document.querySelector(`.js-cart-item-container-${productId}`)
                .classList.remove("is-editing-quantity") // Switching between update and save


            const inputElement = document.querySelector(`.js-quantity-input-${productId}`)
            const newQuantity = Number(inputElement.value)  // Ans 10 // getting the new quantity value for each input so use product id along with it

            if(newQuantity >= 0 && newQuantity< 1000){ // Ans 13 // Adding validation

                updateQuantity(productId, newQuantity) // Ans 11
                document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantity // Ans 12 // updating the quantity label
                updateCartQuantity() // Ans 12 // updating the header
                
            }else{
                document.querySelector(`.js-quantity-label-${productId}`).innerHTML = 'Invalid Entry'
            }
            
        })
                const inputElement = document.querySelector(`.js-quantity-input-${productId}`)
            inputElement.addEventListener('keydown', (event)=> {

                const newQuantity = Number(inputElement.value)  // Ans 10 // getting the new quantity value for each input so use product id along with it


                if(event.key === 'Enter'){
                    if(newQuantity >= 0 && newQuantity < 1000){
                        updateQuantity(productId, newQuantity)
                        document.querySelector(`.js-quantity-label-${productId}`).innerHTML = newQuantity
                        updateCartQuantity()
                        inputElement.value = ''
                    }else{
                        alert('Invalid Entry')
                    }
                }
            })
        
    })
    

