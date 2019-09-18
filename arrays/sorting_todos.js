const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const sortTodosCompleted = function(todos){
    todos.sort(function(a,b){
        if (!a.completed && b.completed){
            return -1
        }else if (a.completed && !b.completed){
            return 1
        }else {
            return 0
        }
    })
}

const sortTodosTitle= function(todos){
    todos.sort(function(a,b){
        if (a.text.toLowerCase() < b.text.toLowerCase()){
            return -1
        }else if (a.text.toLowerCase() > b.text.toLowerCase()){
            return 1
        }else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}
sortTodosTitle(todos)
sortTodosCompleted(todos)
console.log(todos)


console.log(getThingsToDo(todos))
 
// deleteTodo(todos, '!!buy food')
// console.log(todos)

