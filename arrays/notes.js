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

console.log('a'<'A')
const sortNotes = function(notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase()<b.title.toLowerCase()){
            return -1
        }else if (a.title.toLowerCase()>b.title.toLowerCase()){
            return 1
        }
        else {
            return 0
        }
    })
}

const findNote = function(notes,noteTitle){
    return notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
const findNotes = function(notes,query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

sortNotes(notes)
console.log(notes)

// const note = findNote(notes,'exercise')
// console.log(note)
// console.log(findNotes(notes, 'office'))

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