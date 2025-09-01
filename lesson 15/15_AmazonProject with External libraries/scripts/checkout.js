import { renderOrderSummary } from "./checkout/orderSummary.js"

renderOrderSummary() // Run the fn as we want to run this at start of the page.

/* ***Update the page, as now we wanna refresh the page to see the updation. Usually we did this using dom by getting the element needed.
   but here we wanna update page one by one. ie On changing delivery option we want to change delivery date on top and order summary too.
   So update page by re running the whole code. So put whole code inside a fn first. NOTE : The word 'render' means to display on page 

   - Here we put our eventListeners into the big function. Because when we are regenerating all the html , we are actually deleting
    the previous html and replacing it. So we need to add event listeners again. So this is better option.
   - A fn can call itself (recursion) as we did here, calling renderOrderSummary within itself.

   */

/*
    - The technique we used by which we update data and regenerate all html is called MVC (Model View Controller).
     In MVC we split our code into 3 parts : Model (saves and manages the data) Eg : All code in our data folder, 
     View (takes the data and displays it on the page) Eg: In checkout.js code that takes our data and generate the html @ top,
     Controller (runs some code when we interact with the page) Eg: In checkout.js eventListeners at bottom
        We use model to generate the view, Then when we interact with view it will run the controller. 
        Then controller will update the model. Finally we use updated model to regenrate the view .

    - When using MVC make sure the page always matches the data. MVC is adesign pattern to organize our code.
*/


