// DOM Querying 
let taskNum = document.getElementById("task-num").value;
let taskTitle = document.getElementById("task-title").value;
let taskDescription = document.getElementById("task-description").value;
let startDateTime = document.getElementById("start-datetime").value;
let finishDateTime = document.getElementById("finish-datetime").value;
let taskCategory = document.getElementById("task-category").value;
let taskPriority = document.getElementById("task-priority").value;

taskDetails = {task_num : taskNum , task_title : taskTitle , task_description : taskDescription , start_date_time : startDateTime , finish_date_time : finishDateTime , task_category : taskCategory , task_priority : taskPriority};

console.log(taskDetails);

// Storing form data in local storage
const storingTask = () => {
    
}