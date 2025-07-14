let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskCategory = document.getElementById("taskCategory");
const taskPriority = document.getElementById("taskPriority");
const taskDeadline = document.getElementById("taskDeadline");
const taskBody = document.getElementById("taskBody");

function renderTask(){
    taskBody.innerHTML = ``;

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = task.title;
        row.appendChild(titleCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = task.category;
        row.appendChild(categoryCell);

        const priorityCell = document.createElement("td");
        priorityCell.textContent = task.priority;
        row.appendChild(priorityCell);

        const deadlineCell = document.createElement("td");
        deadlineCell.textContent = task.deadline;
        row.appendChild(deadlineCell);

        const actionCell = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(index);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);
        row.appendChild(actionCell);

        taskBody.appendChild(row);

    });
}

taskForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const title = taskTitle.value.trim();
    const category = taskCategory.value.trim();
    const priority = taskPriority.value.trim();
    const deadline = taskDeadline.value.trim();

    if(!title || !category || !priority || !deadline) return;

    const newTask = {title: title, category: category, priority: priority, deadline: deadline};

    if(editIndex === null){
        tasks.push(newTask);
    }
    else{
        tasks[editIndex] = newTask;
        editIndex = null;
    }

    saveTask();
    renderTask();
    taskForm.reset();
    
});

function editTask(index){
    editIndex = index;
    const task = tasks[index];
    taskTitle.value = task.title;
    taskCategory.value = task.category;
    taskPriority.value = task.priority;
    taskDeadline.value = task.deadline;
}

function deleteTask(index){
    tasks.splice(index, 1);
    saveTask();
    renderTask();
}

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTask();