var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");


var createTaskHandler = function() {
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "This is a new task";
    taskItemEl.className = "task-item";
    taskToDoEl.appendChild(taskItemEl);
};


//Clicking the button adds a task
buttonEl.addEventListener("click", createTaskHandler);


