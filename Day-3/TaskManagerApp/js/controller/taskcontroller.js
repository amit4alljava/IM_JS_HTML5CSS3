window.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("add").addEventListener("click",addTask);
    
}

function addTask(){
    var taskName = document.getElementById("taskName").value;
    var taskDesc = document.getElementById("taskDesc").value;
    taskOperations.addNewTask(taskName,taskDesc);
    var ul = document.getElementById("tasklistul");
    var li = document.createElement("li");
    li.innerHTML= taskOperations.taskId + " "+taskName + " "+taskDesc;
    li.addEventListener("click",markTask);
    ul.appendChild(li);
    
}

function markTask(event){
    event.srcElement.classList.toggle("completed");
    var currentTask = event.srcElement.innerHTML.split(" ")[0];
    taskOperations.toggleTask(currentTask);
    //alert("U Click on this task "+event.srcElement);
}