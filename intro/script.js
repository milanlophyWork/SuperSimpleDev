
        // LESSON 1 : Js Basics

/*

const p= document.createElement('p')
p.textContent= 'JavaScript is a technology that we use to create website. Other technologies used for the same are html and css. Html is used to create content of the website. Css changes the appearence of website (styling) and javaScript makes the website interactive. Js can be used to modify the webpage. Syntax are rules we need to follow when using a programming language.' //syntax is grammer of pgming language
document.body.appendChild(p)


    // Exercises

// 1) Use alert() to display 'Good morning! in a popup

// alert('Good morning!')

// 2) Display your name in a pop up

// alert('Milan Lophy')

// 3) Using math, calculate 10 + 5 in the console.

console.log(10 + 5)

// 4) Calculate 20-5 in the console

console.log(20 - 5)

// 5) Calculate 2 + 2 - 5 in the console

console.log(2 + 2 - 5)

// 6) Use document.body.innerHTML = ... to display 'Good morning!' on webpage.

//ANS:  //document.body.innerHTML = 'Good morning!' // will override whole body with this text because innerHTML replaces everything inside body. But it allows appending new elements afterward. ie document.appendChild works if written after this line.

// 7) Display you name on the webpage

// document.body.innerHTML = 'Milan Lophy'

// 8) You order a T-shirt for $10, socks for $8, and dinner plates for $20. Use javaScript to calculate the total cost of your order.

console.log('Total cost = ', 10+8+20)

// 9) Your bank account has $100, you spend $20 on lunch, $50 on dinner, and earn $200 from your job. Calculate how much money you have.

console.log('Money left', 100- (20+50) + 200)

// 10) Use document.body.innerHTML = ... to make the webpage blank.

// document.body.innerHTML = ''

    */

        // LESSON 2 : Numbers and Math

    /*    

// open supersimple.dev/projects/amazon/ and add 2 socks (cost $10.90 for each) free shipping , 1 basketball (cost $20.95 ) with $4.99 shipping

// 1) Calculate cost of items without shipping 

console.log('Cost without shipping = $', 10.90 * 2 + 20.95)

// 2) Calculate cost + shipping

console.log('Cost with shipping = $', 10.90 * 2 + 20.95 + 4.99)

const p = document.createElement('p')
p.textContent = 'Priority or operator precedence: * and / have same priority. - and + have same priority. Priority order: 1) (...)  2) * , /  3)  + , - '
document.body.appendChild(p)

// remove previous items and add 1 basketball and 2 t-shirts (3 items are with free shipping)

// 3) Calculate cost

console.log('cost = $', 20.95 + 7.99 * 2) // 36.93

// 4) Calculate estimated tax (10%)  // 10 % => 10/100 => 0.1

console.log('estimated tax = $', 36.93 * 0.1) // 3.69 but we got 3.693 

//weird behaviour of math in js for decimals. computer find difficult to store some decimals as 0s and 1s leads to incorrect calculations as below

console.log(0.1 + 0.2)

// avoiding inaccuracies while calculating money=> by calculating in cents instead of dollars so that decimals are avoided (1 dollar = 100 cents)

// 5) remove all items and add 1 T-shirt and 1 basketball

console.log('cost = $', (2095 + 799)/100) // 28.94

// Rounding a number in math using Math.round()

console.log(Math.round(2.3))
console.log(Math.round(2.8))

// 6) calculate estimate tax(10%)

console.log('Estimated tax = $', Math.round((2095 + 799) * 0.1)/100) // rounding tax first then coverted to dollar

// 4 th repeated to get accurate value

console.log('cost = $', Math.round((2095 + 799 * 2)* 0.1) / 100)

    // EXERCISES

// 1) At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 icecream for $5. Use JavaScript to calculate the cost of the order.

console.log('cost = $', 10 + 3 * 8 + 5)

// 2) You are at a restaurant with 2 friends (3 people in total) and make the same order as qn 1. Calculate how much each person pays.

console.log('Each person pays $', (10 + 3 * 8 + 5)/3)

// 3) Calculate the total cost of a toaster ($18.99) and 2 shirts ($7.99 each)

console.log('Total cost = $', (1899 + 799 * 2)/100) // 34.97

// 4) Calculate a 10% tax for the total in qn 3

console.log('10% tax = $', Math.round((1899 + 799 *2)*0.1)/100) // 3.5

// 5) Calculate a 20% tax for the total in qn 3

console.log('20% tax = $',Math.round((1899 + 799 * 2)*0.2)/100) // 6.99

// 6) Add a toastor with $4.99 shipping ($18.99) 1 basketball ($20.95) 1 T-shirt (& 7.99) . Calculate cost without shipping and taxes.

console.log('cost without shipping and taxes = $', (799 + 1899 + 2095)/100) // 47.93

// 7) Calculate the total beffor tax

console.log('Total before tax = $', (799 + 1899 + 2095 + 499)/100) // 52.92

// 8) Calculate the 10% tax exactly. 

console.log('10% tax = $', Math.round((799 + 1899 + 2095 + 499)* 0.1)/100) // 5.29

// 9) Calculate Order total at the bottom.

console.log('Order total = $', 52.92 + (Math.round((799 + 1899 + 2095 + 499)*0.1)/100)) // 58.21

// remove toaster from your cart.


// 10) Round 2.8 to 2

console.log(Math.floor(2.8))

// 11) Round 2.2 to 3

console.log(Math.ceil(2.2))

// 12) The temperature is 25 deg Celsius. Calculate temerature in fahrenheit. NOTE : F= (C * 9/5) + 32 , C= (F + 32) * 5/9

console.log('Temperature in F = ',(25* 9/5) + 32)  // 77

// 13) The temperature is 86 deg F. Calculate the temperature in Celsius.

console.log('Temperature in C= ',((86 - 32) * 5/9)) // 30

// 14) The temperature is -5 deg C. Calculate the temperature in Fahrenheit. 

console.log('Temperature in Farenheit = ',(-5 * 9/5)+ 32) // 23

    */

        // LESSON 3 : Strings

/*

console.log('hello')

console.log('concatenating 2 strings => ', 'Good ' + 'Morning')

// typeof can be used to determine type of a value or variable. It returns a string indicating the type.

console.log(typeof 2, typeof 'hello', typeof true, typeof 0.34)

// javascript automatically converts a number to string on performing calculations with strings.

console.log('hello' + 65) // this feature is called type coercion (automatic type conversion).  Javascript read it as 'hello' + '65'

// 1) create the text '$28.94'

console.log('$28.94')

console.log('$' + 7.99 + 20.5) // JavaScript considers number as string to avoid follow order of operations.

// strings also follow order of operations. ie 1) (...)  2)  * , /  3) + , -
console.log('$' + (799 + 2095)/100) // 28.94

// 2) create text 'Items (2): $28.94'

console.log('Items ('+ (1+1) +'): $'+ (799 + 2095)/100) // 28.94

// 3) create a popup with text above inside it.

// alert('Items (' + (1+1) + '): $' + (799 + 2095)/100)

const p = document.createElement('p')
p.textContent= 'In JavaScript, strings can be created in 3 ways. 1: using single quotes, 2: using double quotes, 3: using template literals. Use single quotes by default to develop a string. Some strings may have single quotes within them. In such cases use double quotes. For eg:- '
document.body.appendChild(p)

const p1 = document.createElement('p')
p1.textContent = "It's beautiful. It can otherwise, solved using an escape character (backslash with '). Check I'm in console. Another escape character is 'backslash with n'. This is called a newline character."  //  \' create a single quote that is just text and \"  create a double quote that is just text.
document.body.appendChild(p1)

// alert('Newline \ncharacter') // \n doeasn't create n but creates a newline of text.

const p2 = document.createElement('p')
p2.textContent = 'If we need interpolation (ie insertion of value to string) or multi-line strings use template literals.'
document.body.appendChild(p2)

console.log('1) I\'m Single quotes', " 2) Double quotes", `${3}) Template Strings`)

console.log(`Features of template literals: `)
console.log(`1) Interpolation: Allow insertion of value directly into a string using ${'dollar and curly braces'}. eg: Items (${2}): $${(799+ 2095)/100}`)
console.log(`  2) Allows 
    multi-line strings.`)

    // EXERCISES

// 1) Create the text 'My name is:' as a string

console.log('My name is:')

// 2) Create your name as a string

console.log('Milan')

// 3) Using concatenation, add the 2 strings from qn 1 and qn 2.

console.log('My name is:'+ ' Milan')

// 4) At a restaurant, you order 1 coffee ($5) and 1 bagel($3). Using math calculate the total cost and using concatenation create the text 'Total cost: $...

console.log('Total cost: $' + (5+3))

// 5) Do the same thing as qn 4 but use a template literal and interpolation

console.log(`Total cost: $${5+3}`) // 8

// 6) Display the text from qn 5 in a popup using alert()

// alert(`Total cost: $${5+3}`)

// 7) You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation create the text: 'Total cost:$...

console.log('Total cost: $',(599 + 295)/100) // 8.94

// 8) Do the same thing as qn 7, but use a template string and interpolation.

console.log(`Total cost: $${(599 + 295)/100}`)

// 9) Display the text from qn 8 in a popup

// alert(`Total cost: $${(599 + 295)/100}`)

// 10) Using a multi-line string, create the text from qn 8 and add a line of text 'Thank you, come again!'. Display both lines in a popup.

// alert(`Total cost: $${(599 + 295)/100}
// Thank you, come again!`)

// update the cart to 2 basket balls ($20.95 each) with $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

// 11) Using interpolation, create the first line of text 

console.log(`Items (${2+2}): $${(2095 * 2 + 799 * 2)/100}`)

// 12) Create second line of text: 'Shipping & handling: $9.98'

console.log(`Shipping and handling: $${(499 + 499)/100}`)

// 13) Create third line: 'Total before tax: $67.86'

console.log(`Total before tax: $${((2095 * 2 + 799 * 2) + (499 + 499))/100}`)

// 14) Create fourth line of text: 'Estimated tax (10%): $6.79'

console.log(`Estimated tax (10%): $${Math.round(((2095 * 2 + 799 * 2) + (499 + 499))* 0.1)/100}`)

// change the cart back to 1 basket-ball, 1 t-shirt (both free shipping)

    */
