const todos = [{
    text: 'Order dog food',
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

// print a summary of how many todos are left
// Add a p for each todo above(use text value)

const incompleteTodos = todos.filter(function(todo){
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)

})

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
//     if (p.textContent.toLowerCase().includes('3'))
//     {
//         p.remove()
//     }

// })

