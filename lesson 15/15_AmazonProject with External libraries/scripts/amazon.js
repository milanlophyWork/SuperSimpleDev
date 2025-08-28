import { cart, addToCart} from "../data/cart.js" // or we can just do import * as cartModule from '../data/cart.js' to import everything inside a module
import { products } from "../data/product.js"
import { formatCurrency } from "./utils/money.js"

let productsHTML = '' 

products.forEach((product)=> {
    const html = `
        <div class= "product-container">
            <div class= "product-image-container">
                <img src = "${product.img}" class= "product-image">
            </div>

            <div class = "product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class= "product-rating-container">
                <img src = "img/ratings/rating-${product.rating.stars * 10}.png" class= "product-rating-stars">
                
                <div class = "product-rating-count link-primary">
                    ${product.rating.count}
                </div>

            </div>

            <div class = "product-price">
                $${formatCurrency(product.priceCents)} 
            </div>

            <div class = "product-quantity-container">
                <select>
                    <option value = "1" selected>1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                    <option value = "7">7</option>
                    <option value = "8">8</option>
                    <option value = "9">9</option>
                    <option value = "10">10</option>
                </select>
            </div>

            <div class = "product-spacer"></div>

            <div class= "added-to-cart">
                <img src="img/icons/checkmark.png" >
                Added
            </div>

            <button class = "add-to-cart-button button-primary js-add-to-cart" data-product-id= "${product.id}">
                Add to Cart
            </button>
        </div>
    ` 

    productsHTML += html 
})

document.querySelector('.js-products-grid').innerHTML = productsHTML

function updateCartQuantity(){
    let cartQuantity = 0

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
}

document.querySelectorAll('.js-add-to-cart') 
    .forEach((button)=> { 
        button.addEventListener('click', ()=> { 

            const productId = button.dataset.productId

            addToCart(productId)
            updateCartQuantity()
        })  
    
    })    
