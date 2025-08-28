
export let cart = JSON.parse(localStorage.getItem('cart')) || [{
    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", // deduplicating the data or normalizing the data : Using id we could access all other properties . So no need to store details again 
    quantity : 2
},
{
    productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1
}] // now this variable can be used outside cart.js 
// cart as variable will reset on refreshing the page or on moving to a different page. To solve this problem we can use localStorage to save our cart

function saveToStorage(){
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
            quantity: 1
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

export function calculateCartQuantity(){ // Ans 1
    let cartQuantity = 0

    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity
    })
    return cartQuantity
}

export function updateQuantity(productId, newQuantity){ // Ans 11
    let matchingItem
    cart.forEach((cartItem)=> {
        if(productId === cartItem.productId){
            matchingItem = cartItem
        }
    })

    if(matchingItem){
        matchingItem.quantity = newQuantity
    }
    
    saveToStorage()
}