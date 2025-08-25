
// Adding more products:

//  JS steps : 1) Save the data 2) Generate the html 3) Make it interactive

// data means information. In this case data is information about our products. we are creating something in JS that closely matches the data on the page

/* create a variable to save the data. Our data is a list of products so we save it in an array. Because array matches a list.
   Each product in the list has many values like img, name, price, rating, etc. So we use an object to represent each object. Because object group multiple values together. */

/*   const products = [{ // This is called a data structure. Because it structures or organizes the data.
    img : 'img/products/athletic-cotton-socks-6-pairs.jpg',
    name : 'Black and Gray Atheletic Cotton Socks - 6 Pairs',
    rating : {
        stars : 4.5,
        count : 87
    },
    priceCents : 1090

}
]  instead of writing here we made a separate script for products in data folder and add it to amazon.html */

// next step is to use this data to generate the html. To generate the html we loop this array.

let productsHTML = '' // after generating the html we want to combine the all html together into a string. Create a variable for the same

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
                $${(product.priceCents/ 100).toFixed(2)} 
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

            <button class = "add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
    ` // creating html for each of the product , here .toFixed() is a method for numbers that lets us specify the number of decimals we want. toFixed() will convert a number into a string.

    productsHTML += html // Accumulator pattern    
})

// last step- make it interactive, ie put it on the webpage using the DOM

document.querySelector('.js-products-grid').innerHTML = productsHTML

