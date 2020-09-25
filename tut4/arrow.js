const tasks = {
    tasks: [{
        text: 'grocery',
        status: true
    },  {
        text: 'clean yard',
        status: false
    },  {
        text: 'film course',
        status: false
    }],
    getTaskToDo(){
        return this.tasks.filter((tasks) => tasks.status === false)
    }
}


console.log(tasks.getTaskToDo());
