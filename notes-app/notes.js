const fs= require('fs')
const chalk = require('chalk')

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
        console.log(chalk.green.inverse('New note taken'))
    }
    else{
        console.log(chalk.red.inverse("Note already taken!"))
    }
}

const removeNote = function(title){
    //console.log("Removing note...",title)
    const notes=loadNotes()
    const notesToKeep= notes.filter(function(note){
        return note.title !== title
    })
    
    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse("No note found"))
    }
    else{
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Notes removed!"))
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
    addNote: addNote,
    removeNote: removeNote
}