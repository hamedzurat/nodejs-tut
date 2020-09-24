const chalk = require("chalk");
const yargs = require("yargs");


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
    handler: function(argv){
        console.log('adding: '+ argv.title + "\n" + argv.body);
    }
});

yargs.command({
    command: 'rm',
    describe: 'for removing file',
    handler: function(){
        console.log('removing....');
    }
});

yargs.command({
    command: 'list',
    describe: 'for listing file',
    handler: function(){
        console.log('listing....');
    }
});

yargs.command({
    command: 'read',
    describe: 'for reading file',
    handler: function(){
        console.log('reading....');
    }
});

yargs.argv;
