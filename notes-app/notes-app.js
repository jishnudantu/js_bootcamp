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
const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    if (p.textContent.toLowerCase().includes('some')){
        p.remove()
    }
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newParagraph)

document.querySelector('button').addEventListener('click',function(e){
    e.target.textContent = 'Thebutton was clicked'
    alert('Element clicked through function!')
})