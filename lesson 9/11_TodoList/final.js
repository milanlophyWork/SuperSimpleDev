// using forEach, arrow fn and addEventListener

let todoList = []

function renderTodoList(){
    let html = ''

    todoList.forEach((todos,index) => {
        const {name, dueDate} = todos

        html += `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class= "js-delete delete">Delete</button>
        `
    })  // button above is just a string. But only html elements have the method addEventListener. So after the html we generated is put onto the screen addEventListener is called.

    document.querySelector('.js-displayTodo').innerHTML = html  // attaching the html generated to the webpage.

    document.querySelectorAll('.js-delete')     // we can have number of delete buttons with same class. so to select all we use querySelectorAll(). It returns an array of delete btns so access it using forEach. The values inside forEach are deleteBtns to which addEventListener is added
        .forEach((deletBtn, index)=>{
            deletBtn.addEventListener('click', ()=> { // 
                todoList.splice(index, 1)
                renderTodoList()
            })
        })
            
}

function addTodo(){
    const inputElement = document.querySelector('.js-todo')
    const dateElement = document.querySelector('.js-date')

    const name = inputElement.value 
    const dueDate = dateElement.value

    todoList.push({
        name,
        dueDate
    })

    renderTodoList()

    inputElement.value = ''
    dateElement.value = ''
}