let taskForm = document.getElementById("new-task-form");

// Clicking the new Task button and unhiding the form
let newTaskButton = document.getElementById("new-task-button");
newTaskButton.addEventListener("click" , showTaskForm);

// Updating the table
updateTable();

// DOM for sorting by clicking the heads
let headID = document.getElementById("head-id");
let headPriority = document.getElementById("head-priority");
let headCategory = document.getElementById("head-category");
let headFinishTime = document.getElementById("head-finish-time");
let headRemaining = document.getElementById("head-remaining");


// Sending the keys to ui.js
headID.addEventListener("click" , () => keyAndTable("ID"));
headPriority.addEventListener("click" , () => keyAndTable("Priority"));
headCategory.addEventListener("click" , () => keyAndTable("Category"));
headFinishTime.addEventListener("click" , () => keyAndTable("FinishTime"));
headRemaining.addEventListener("click" , () => keyAndTable("Remaining"));


// Clicking Submit in form and hiding it
taskForm.addEventListener("submit" , () => {

    // Storing Data in local storage
    storingTask();
    
});


// This can be used  with other feature, like canceling form

// Hiding task form
// hideTaskForm();

// Reset the form
// taskForm.reset();


/*Function study

document.getElementById("new-task-button").addEventListener("click", function(){
    greet(document.getElementById("task-title").value)
});

function greet (name) {
    console.log(`Hello ${name}`)
}

*/
