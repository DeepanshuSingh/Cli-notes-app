const chalk = require('chalk')
const yargs = require('yargs')
const notes = require("./notes")

yargs.version('1.1.0')



// add, remove , read , list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      } ,
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list of  notes',
    handler() {
        console.log(chalk.bgWhite.black("Your Notes:"))
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'read  notes',
    builder:{
        title:{
            describe: "title to read note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
