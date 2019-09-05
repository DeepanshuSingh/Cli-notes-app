const fs = require('../play/node_modules/fs')
const chalk = require('../play/node_modules/chalk/types')

const addNote = (title,body) =>{
    const notes = loadNotes()

    const dupcheck = notes.find(note => note.title === title)
    if( !dupcheck){
        notes.push({
            title:title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note Added!!")
    }
    else{
        console.log("Node name already taken")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newnotes = notes.filter(note =>  note.title != title)
    if(newnotes.length == notes.length){
        const msg = chalk.bgRed('No node found')
        console.log(msg)
    }else{
        const msg = chalk.bgGreen('Node Removed')
        saveNotes(notes)
        console.log(msg)
    }
    
}

const listNote = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const req = notes.find(note => note.title === title)
    if(!req){
        console.log(chalk.bgRed.white(" Note Not found "))
    }else{
        console.log(chalk.inverse(req.title))
        console.log(req.body)
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data) 
}

const loadNotes = () =>{
    try{
        const buffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(buffer)

    }catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}