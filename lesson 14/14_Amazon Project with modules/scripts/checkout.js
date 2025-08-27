/* Has 2 sections cart-section and payment-section 
   Main idea of JavaScript : 
   1. Save the data 2. Generate the HTML 3. Make it interactive  */

import { cart,removeFromCart } from "../data/cart.js"; // data saved earlier imported
import {products} from '../data/product.js';   // ../ means folder outside current folder (ie scripts). It checks for data folder outside scripts folder
import { formatCurrency } from "./utils/money.js"; //   ./ means current folder. It checks for util folder inside current folder (ie scripts)

let cartSummaryHTML = ''

cart.forEach((cartItem)=> {

    const productId = cartItem.productId // normalizing // using id, to navigate through all properties we want

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
                            Quantity: <span class= "quantity-label">${cartItem.quantity}</span>
                        </span>

                        <span class="update-quantity-link link-primary">
                            Update
                        </span>

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

    /* 2 problems : decimal of price not fixed to 2 (solved by toFixed()) 
       delivery option cannot be selected for each product (solved by making the name attribute same for each product) 

       radio button selectors with same name come under a group. ie we can't select option separately for each product because 
       all options were of same name attribute. So we made delivery options of each product has same name attribute separately. 
       ie radio selectors at top has same name attribute and radio selectors at bottom has another but same name attribute */
    
})

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML
document.querySelectorAll('.js-delete-link')
        .forEach(link => {
            link.addEventListener('click', ()=> {
                const productId = link.dataset.productId    // to know which product to be deleted we add the product id to the delete link element using data attribute
                removeFromCart(productId) // onclicking delete we wanna remove product from cart and also update the html.
                const container = document.querySelector(   // update the html steps : use the dom to get the element to remove then use remove() method
                    `.js-cart-item-container-${productId}` // we set productId as matchingProduct.id
                )
                container.remove()  // Every element we get from dom has a method called remove()
            }) 
        })

