let todoList = []

function renderTodoList(){
    let html = ''

    todoList.forEach((value, index) => {
        const {name, dueDate} = value

        html += `
        
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class = "delete" onclick= "
                todoList.splice(${index}, 1)
                renderTodoList()
            ">Delete</button>

        `
    })

    document.querySelector('.js-displayTodo').innerHTML = html
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