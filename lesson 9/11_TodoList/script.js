const todoList = []

function renderTodoList(){
    let html = ''

    for(let i = 0; i< todoList.length; i++){
        const {name, dueDate} = todoList[i]

        html += `
            <p>
                ${name}
                ${dueDate}

                <button onclick = "
                    todoList.splice(${i}, 1)
                    renderTodoList()
                ">Delete</button>
            </p>
        `
    }
    document.querySelector('.js-displayTodo').innerHTML = html
}

function addTodo(){
    const inputElement = document.querySelector('.js-todo')
    const dateElement = document.querySelector('.js-date')

    const name = inputElement.value
    const dueDate = dateElement.value

    todoList.push({
        name ,
        dueDate
    })

    renderTodoList()

    inputElement.value = ''
    dateElement.value = ''
}