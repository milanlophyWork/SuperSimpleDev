// Putting all our code in a function so we can regerate our code if needed

import { cart } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { getProduct } from "../../data/product.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary(){
    let productPriceCents = 0
    let shippingCostCents = 0
    cart.forEach((cartItem)=> { // step 1 : Save the data [Model]   

        const product = getProduct(cartItem.productId); // * We wanna get full product details using productId 

        productPriceCents += product.priceCents * cartItem.quantity// first calculate cost of the product Steps : 1. Loop through the cart 2. For each product, price * quantity  3. Add everything together
        // * We wanna get shipping cost Steps : 1. Loop through the cart 2. Add all the shipping costs together

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
        shippingCostCents += deliveryOption.priceCents
    })

    const totalWithoutTaxCents = productPriceCents + shippingCostCents
    const tax = Math.round(totalWithoutTaxCents * 0.1)
    const totalCents = totalWithoutTaxCents + tax

    // console.log(productPriceCents, shippingCostCents, totalWithoutTaxCents, tax, totalCents)


    // step 2 : Generate the html [View]

    const paymentSummaryHTML = `
        <div class = "payment-summary-title">
            Order Summary
        </div>

        <div class = "payment-summary-row">
            <div>Items (3):</div>
            <div class = "payment-summary-money">
                $${formatCurrency(productPriceCents)}
            </div>
        </div>

        <div class = "payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class= "payment-summary-money">
                $${formatCurrency(shippingCostCents)}
            </div>
        </div>

        <div class = "payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class= "payment-summary-money">
                $${formatCurrency(totalWithoutTaxCents)}
            </div>
        </div>

        <div class= "payment-summary-row">
            <div>Estimated Tax (10%):</div>
            <div class= "payment-summary-money">
                $${formatCurrency(tax)}
            </div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class= "payment-summary-money">
                $${formatCurrency(totalCents)}
            </div>
        </div>

        <button class= "place-order-button button-primary">
            Place your order
        </button>

    `

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML
    // step 3 : Make it interactive
}