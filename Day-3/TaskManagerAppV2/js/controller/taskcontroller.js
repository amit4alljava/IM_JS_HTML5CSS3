window.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("delete").addEventListener("click",deleteTask);
    document.getElementById("save").addEventListener("click",saveTask);
    document.getElementById("load").addEventListener("click",loadTask);
}

function loadTask(){
  if(window.localStorage){
      if(localStorage.taskdata){
        taskOperations.taskList = JSON.parse(localStorage.taskdata);
        printTask();
      }
    }
    else{
        alert("Your Browser Not Support the Local Storage Feature...")
    }  
}

function saveTask(){
    if(window.localStorage){
        var json = JSON.stringify(taskOperations.taskList);
        console.log("JSON is ",json);
        localStorage.taskdata = json;
    }
    else{
        alert("Your Browser Not Support the Local Storage Feature...")
    }
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
    updateCount();
    
}

function deleteTask(){
    taskOperations.deleteTask();
    printTask();
}

function updateCount(){
    document.getElementById("pendingcount").innerHTML=taskOperations.pendingCount();
    document.getElementById("completedcount").innerHTML=taskOperations.completedCount();
}

function markTask(event){
    event.srcElement.classList.toggle("completed");
    var currentTask = event.srcElement.innerHTML.split(" ")[0];
    taskOperations.toggleTask(currentTask);
    updateCount();
    //alert("U Click on this task "+event.srcElement);
}

function printTask(){
    var ul = document.getElementById("tasklistul");
    ul.innerHTML="";
 taskOperations.taskList.forEach(function(taskObject){
      
    var li = document.createElement("li");
    li.innerHTML= taskObject.id + " "+taskObject.name + " "+taskObject.desc;
    li.addEventListener("click",markTask);
    ul.appendChild(li);
    
 });
    updateCount();
}