const chalk = require("chalk");
const yargs = require("yargs");
const note  = require('./note.js');
const { addNote, rmNote,listNotes,readNote } = require("./note.js");
const { argv } = require("yargs");

yargs.command({
    command: 'add',
    describe: 'for adding file',
    builder: {
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'adding note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        addNote(argv.title,argv.body);
    }
});

yargs.command({
    command: 'rm',
    describe: 'for removing file',
    builder:{
        title:{
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        rmNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'for listing file',
    handler(){
        listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'for reading file',
    builder:{
        title: {
            describe: 'read the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        readNote(argv.title);
    }
});

yargs.argv;
