// const fs = require("fs");

// //fs.writeFileSync("notes.txt","yo yo yo")

// fs.appendFileSync("notes.txt","i am chika")


const getnotes = require("./notes.js");

const notes = getnotes();

console.log(notes);
