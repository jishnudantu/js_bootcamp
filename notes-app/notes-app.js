// DOM- Document Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
const notes = [{
    title:'My next trip',
    body:'I would like to go to spain'
},
{
    title:'Exercise',
    body:'Work on upper body'
},
{
    title:'Office',
    body:'Check emails regularly'
}]
// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
//     if (p.textContent.toLowerCase().includes('some')){
//         p.remove()
//     }
// })

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newParagraph)

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent = 'The button was clicked'
    alert('Element clicked through function!')
    notes.forEach(function(todo){
        const h = document.createElement('h1')
        h.textContent = todo.title
        document.querySelector('body').appendChild(h)
        const p = document.createElement('p')
        p.textContent = todo.body
        document.querySelector('body').appendChild(p)
    })
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    e.target.textContent = 'The delete all button was clicked'
    alert('Delete button was clicked!')
    notes.forEach(function(note){
        const h1 = document.querySelectorAll('h1')
        // console.log(h1)
        h1.forEach(function(h){
            // console.log(h)
            if(note.title === h.textContent){
                // console.log(note.title.textContent)
                h.remove()
            }

        })

        const p1 = document.querySelectorAll('p')
        p1.forEach(function(p){
            if(note.body === p.textContent){
                p.remove()
            }
        })
    })
})