let taskForm = document.getElementById("new-task-form");

// Clicking the new Task button and unhiding the form
let newTaskButton = document.getElementById("new-task-button");
newTaskButton.addEventListener("click" , showTaskForm);

// Updating the table
updateTable();

// DOM for sorting by clicking the heads (new method)
forSorting = document.getElementById('heads');
forSorting.addEventListener("click" , (event) => {
    switch (event.target.id) {
        case "head-id":       keyAndTable("task_num"); break;
        case "head-priority": keyAndTable("task_priority"); break;
        case "head-category": keyAndTable("task_category"); break;
    }
});

// DOM for actions, getting rows and then going for actions
forActions = document.getElementById("table-data");
forActions.addEventListener("click" , (event) => {
    const row = event.target.closest('tr').rowIndex;
    switch (event.target.textContent) {
        case "Done or Delete ?" : rowToData("delete" , row); break;
        case "Edit" : rowToData("edit" , row); break;
    }
});

// Clicking Submit in form and hiding it
taskForm.addEventListener("submit" , () => {

    // Storing Data in local storage
    storingTask();
    
});

// DOM for sorting by clicking the heads (old method)
// let headID = document.getElementById("head-id");
// let headPriority = document.getElementById("head-priority");
// let headCategory = document.getElementById("head-category");

// Sending the keys to ui.js (old)
// headID.addEventListener("click" , () => keyAndTable("task_num"));
// headPriority.addEventListener("click" , () => keyAndTable("task_priority"));
// headCategory.addEventListener("click" , () => keyAndTable("task_category"));

// Need to sort these 
// let headFinishTime = document.getElementById("head-finish-time");
// let headRemaining = document.getElementById("head-remaining");
// headFinishTime.addEventListener("click" , () => keyAndTable("finish_datetime"));
// headRemaining.addEventListener("click" , () => keyAndTable("Remaining"));

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
