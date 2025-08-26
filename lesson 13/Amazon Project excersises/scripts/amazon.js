//  JS steps : 1) Save the data 2) Generate the html 3) Make it interactive

/* Adding more products: check products.js in data folder
   next step is to use this data to generate the html. To generate the html we loop this array. */

let productsHTML = '' // after generating the html we want to combine the all html together into a string. Create a variable for the same

products.forEach((product)=> { // step 2
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
                $${(product.priceCents/ 100).toFixed(2)} 
            </div>

            <div class = "product-quantity-container">
                <select class= "js-quantity-selector-${product.id}">
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

    productsHTML += html // combining to a string // Accumulator pattern    
})

// step 3 

document.querySelector('.js-products-grid').innerHTML = productsHTML


document.querySelectorAll('.js-add-to-cart') 
    .forEach((button)=> { 
        button.addEventListener('click', ()=> { 
            const productId = button.dataset.productId

            let matchingItem
            let quantitySelected = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)

            cart.forEach((item)=> {  
                if(productId === item.productId){
                    matchingItem = item
                }
            })
                
            if(matchingItem){
                matchingItem.quantity += quantitySelected 
            }else{
                cart.push({ 
                    productId : productId, 
                    quantity : quantitySelected
                })
            }

            let cartQuantity = 0

            cart.forEach((item)=> {
                cartQuantity += item.quantity
            })

            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
        })  
    
    })  