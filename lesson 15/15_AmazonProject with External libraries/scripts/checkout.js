

import { cart,removeFromCart } from "../data/cart.js"; 
import {products} from '../data/product.js';  
import { formatCurrency } from "./utils/money.js"; 
import { deliveryOptions } from "../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

// const today = dayjs() // step 1 : get today's date// dayjs() represents the current date and time.
// const deliveryDate  = today.add(7, 'days') // step 2 : To perform calculations : add 7 days to current date
// console.log(deliveryDate.format('dddd, DD MMM YYYY')) // step 3 : display in easy-to-read format. // 'dddd' display day of the week, 'DD' display date, 'MMM' display month, 'YYYY' display year.

let cartSummaryHTML = ''

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
    
})

function deliveryOptionsHTML(){ // step 2 generating the html for deliveryOptions : first loop through delivery options (so import it), then for each option generate some html, and lastly combine the html together
        let html = ''
    deliveryOptions.forEach((deliveryOption)=> {
        html += `

            <div class= "delivery-option">
                <input type = "radio" class= "delivery-option-input" name= "delivery-option-${matchingProduct.id}">

                <div>
                    <div class = "delivery-option-date">
                        Tuesday, June 21
                    </div>

                    <div class= "delivery-option-price">
                        FREE Shipping
                    </div>
                </div>
            </div>

        `
    })

    document.querySelector('.cart-item-details-grid').innerHTML += html
}

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
            }) 
        })
