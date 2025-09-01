

import { cart,removeFromCart, updateDeliveryOption } from "../data/cart.js"; 
import { products } from '../data/product.js';  
import { formatCurrency } from "./utils/money.js"; 
import { deliveryOptions } from "../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

// const today = dayjs() // step 1 : get today's date// dayjs() represents the current date and time.
// const deliveryDate  = today.add(7, 'days') // step 2 : To perform calculations : add 7 days to current date
// console.log(deliveryDate.format('dddd, DD MMM YYYY')) // step 3 : display in easy-to-read format. // 'dddd' display day of the week, 'DD' display date, 'MMM' display month, 'YYYY' display year.


function renderOrderSummary(){

    let cartSummaryHTML = ''

    cart.forEach((cartItem)=> {

        const productId = cartItem.productId 

        let matchingProduct

        products.forEach((product)=> {
            if(product.id === productId){
                matchingProduct = product
            }
        });

        const deliveryOptionId = cartItem.deliveryOptionId // display delivery date on top

        let deliveryOption

        deliveryOptions.forEach((option)=> {
            if(option.id === deliveryOptionId){
                deliveryOption = option
            }
        })

        const today = dayjs()
        const deliveryDate = today.add( 
            deliveryOption.deliveryDays,
            'days'
        )

        const dateString = deliveryDate.format('dddd, MMMM D')

        cartSummaryHTML += `
            <div class= "cart-item-container 
            js-cart-item-container-${matchingProduct.id}">
                <div class= "delivery-date">
                    Delivery date: ${dateString}
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

                        ${deliveryOptionsHTML(matchingProduct, cartItem)}

                    </div>
                </div>
            </div>
        `
        
    })

    function deliveryOptionsHTML(matchingProduct, cartItem){ // step 2 generating the html for deliveryOptions : first loop through delivery options (so import it), then for each option generate some html, and lastly combine the html together
        let html = ''
        deliveryOptions.forEach((deliveryOption)=> {

            const today = dayjs() 
            const deliveryDate = today.add(
                deliveryOption.deliveryDays, // No. of time to be added
                'days' // Length of time to be added
        )

        const dateString = deliveryDate.format(
            'dddd, MMMM D'
        )

        const priceString = deliveryOption.priceCents === 0 
            ? 'FREE' 
            : `$${formatCurrency(deliveryOption.priceCents)} -`

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId // Automating checking of option
            
        // Step 2 : generate the html
            html += `

                <div class= "delivery-option js-delivery-option"
                data-product-id ="${matchingProduct.id}"
                data-delivery-option-id= "${deliveryOption.id}">

                    <input type = "radio" 
                    ${isChecked ? 'checked' : ''}
                    class= "delivery-option-input" 
                    name= "delivery-option-${matchingProduct.id}">

                    <div>
                        <div class = "delivery-option-date">
                            ${dateString}
                        </div>

                        <div class= "delivery-option-price">
                            ${priceString} Shipping
                        </div>
                    </div>
                </div>

            `
        })

        return html
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
        
    // Step 3 : Make interactive 

    //  first Update deliveryOptionId in cart Then update the page

    document.querySelectorAll('.js-delivery-option')

        .forEach((element)=> {

            element.addEventListener('click', ()=> {
                    const {productId, deliveryOptionId} = element.dataset   // short hand property
                    updateDeliveryOption(productId, deliveryOptionId) // ***After updating delivery option re-running the whole code for updating the page
                    renderOrderSummary() // So no need to refresh for getting updated data. Better way than using DOM.
                })
        })
}

renderOrderSummary() // Run the fn as we want to run this at start of the page.

/* ***Update the page as now we wanna refresh the page to see the updation. Usually we did this using dom by getting the element needed.
   but here we wanna update page one by one. ie On changing delivery option we want to change delivery date on top and order summary too.
   So update page by re running the whole code. So put whole code inside a fn first. NOTE : The word 'render' means to display on page 

   - Here we put our eventListeners into the big function. Because when we are regenerating all the html , we are actually deleting
    the previous html and replacing it. So we need to add event listeners again. So this is better option.
   - A fn can call itself (recursion) as we did here, calling renderOrderSummary within itself.
*/
