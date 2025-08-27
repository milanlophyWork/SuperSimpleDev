
export let cart = [{
    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", // deduplicating the data or normalizing the data : Using id we could access all other properties . So no need to store details again 
    quantity : 2
},
{
    productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1
}] // now this variable can be used outside cart.js


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
}