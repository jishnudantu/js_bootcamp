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
const findNote = function(notes,noteTitle){
    return notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const note = findNote(notes,'office')
console.log(note)

// const findNote = function(notes,noteTitle){
//     const index = notes.findIndex(function(note){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const index = notes.findIndex(function(note, index){
//     ///console.log(note)
//     return note.title === 'Office'
// })
// console.log(index)