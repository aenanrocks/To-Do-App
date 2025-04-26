// Clicking the new Task button and unhiding the form
const taskForm = document.getElementById("new-task-form");
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
    const rowNum = event.target.closest('tr').rowIndex;
    switch (event.target.textContent) {
        case "Done or Delete ?" : rowToData("delete" , rowNum); break;
        case "Edit" : rowToData("edit" , rowNum); break;
    }
});

document.addEventListener("submit", (e) => {
    if (e.target.id === "new-task-form") {
        // Storing Data in local storage
        storingTask();
    }
    
});

