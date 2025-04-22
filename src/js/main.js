let taskForm = document.getElementById("new-task-form");

// Clicking the new Task button and unhiding the form
let newTaskButton = document.getElementById("new-task-button");
newTaskButton.addEventListener("click" , showTaskForm);

// Updating the table
updateTable();

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
