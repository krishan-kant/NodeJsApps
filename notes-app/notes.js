const fs= require('fs')

const getNotes = function(){
    const message='Your Notes...'
    return message
}

const addNote = function(title,body){
    const notes=loadNotes()
    const duplicatenote= notes.filter(function(note){
        return note.title===title
    })

    if(duplicatenote.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note taken')
    }
    else{
        console.log("Note already taken!")
    }
}

const saveNotes = function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function(){
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON= databuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}