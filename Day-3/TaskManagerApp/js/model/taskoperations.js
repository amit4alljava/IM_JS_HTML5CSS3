var taskOperations={
    taskList:[],
    taskId : 0,
    addNewTask:function(name,desc){
        this.taskId++;
        var taskObject = new Task(this.taskId,name,desc);
        this.taskList.push(taskObject);
    },
    deleteTask:function(){
        
    },
    toggleTask:function(id){
    var taskArray = this.taskList.filter(function (taskObject){
        return taskObject.id==id;
    });
    taskArray[0].completed=!taskArray[0].completed;     
    }
}