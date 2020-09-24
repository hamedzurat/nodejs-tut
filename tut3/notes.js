const fs = require("fs");

const getNotes = function(){
    return fs.readFileSync("notes.txt");
}


module.exports = getNotes

