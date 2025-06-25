const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");


addTaskButton.addEventListener("click", function(){
    const taskText = taskInput.value;
    if(taskText == ""){
        alert("Please enter a Task!");
        return;
    }
    
    
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "#ff4c4c";
    deleteButton.style.color = "white";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(taskItem);
    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.style.backgroundColor = "#00ff00";
    completeButton.style.marginLeft = "3px";
    completeButton.style.color = "white";
    completeButton.style.border = "none";
    completeButton.style.cursor = "pointer";
  
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);
    
    completeButton.addEventListener("click", function(){
        taskItem.style.textDecoration = "line-through";
    });
    
    taskList.appendChild(taskItem);
    taskInput.value = "";
});




