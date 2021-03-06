const fs = require('fs');
const { default: chalk } = require('chalk');


const addNote = (title,body) => {
    var notes = loadNote();

    if (!notes.find((notes) => notes.title === title)){
        console.log('adding new notes');
        notes.push({
            title: title,
            body: body
        })
    }else{
        console.log('same title dude');
    }

    saveNote(notes);
}

const loadNote = (title) => {
    console.log('loading notes');
    try {
        var notes = fs.readFileSync('notes.json');
        return JSON.parse(notes.toString());
    }catch(err){
        return [];
    }
}

const saveNote = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
    console.log('saving notes');
}

const rmNote = (title) => {
    var notes = loadNote();

    const tokeep = notes.filter((notes) => notes.title !== title)

    if(tokeep.length < notes.length){
        console.log(chalk.green.inverse('done'));
        saveNote(tokeep);

    }else{
        console.log(chalk.red.inverse('failed'));
    }
    
}

const listNotes = () => {
    var notes = loadNote();

    console.log(chalk.blue('listing....'));

    notes.forEach(note => {
        console.log(note.title);
    });

}

const readNote = (title) => {
    var notes = loadNote();

    const index = notes.find((notes) => notes.title === title);

    if (index){
        console.log(index.body);
    }else{
        console.log(chalk.red.inverse('404'));
    }
}

module.exports = {
    addNote: addNote,
    rmNote: rmNote,
    listNotes: listNotes,
    readNote: readNote
}