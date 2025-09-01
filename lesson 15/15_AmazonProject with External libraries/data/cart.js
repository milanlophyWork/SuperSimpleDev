
export let cart = JSON.parse(localStorage.getItem('cart')) || [{

    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", // deduplicating the data or normalizing the data : Using id we could access all other properties . So no need to store details again 
    quantity : 2,
    deliveryOptionId : '1' // this helps to get info from deliveryOptions array as we link by id (normalizing the data)
},
{
    productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1,
    deliveryOptionId : '2'

}] // now this variable can be used outside cart.js 
// cart as variable will reset on refreshing the page or on moving to a different page. To solve this problem we can use localStorage to save our cart

function saveToStorage(){ // similarly we wanna add delivery option to cart in localStorage. but to simplify we delete the existing cart in localStorage and then run the page, creates a new cart with delivery options too.
    localStorage.setItem('cart', JSON.stringify(cart)) 
}

export function addToCart(productId){
    let matchingItem

    cart.forEach((cartItem)=> {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        }
    })

    if(matchingItem){
        matchingItem.quantity++
    }else{
        cart.push({
            productId,
            quantity: 1,
            deliveryOptionId : '1' // giving a default delivery id of 1 if new products are added 
        })
    }

    saveToStorage()
}

export function removeFromCart(productId){
    // steps : create new array, Loop through cart, Add each product to new array except for this productId

    const newCart = []
    cart.forEach(cartItem => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem)
        }
    })
    cart = newCart
    saveToStorage()
}