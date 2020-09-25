const fs = require('fs');
const { default: chalk } = require('chalk');


const addNote = function(title,body){
    var notes = loadNote();

    const duplicate = notes.filter(function(notes){
        return notes.title === title;
    })

    if (duplicate.length === 0){
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

const loadNote = function(title){
    console.log('loading notes');
    try {
        var notes = fs.readFileSync('notes.json');
        return JSON.parse(notes.toString());
    }catch(err){
        return [];
    }
}

const saveNote = function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes));
    console.log('saving notes');
}

const rmNote = function(title){
    var notes = loadNote();

    const tokeep = notes.filter(function(notes){

        return notes.title !== title;
    })

    if(tokeep.length < notes.length){
        console.log(chalk.green.inverse('done'));
        saveNote(tokeep);

    }else{
        console.log(chalk.red.inverse('failed'));
    }
    
}


module.exports = {
    addNote: addNote,
    rmNote: rmNote
}