let taskForm = document.getElementById("new-task-form");

// Clicking the new Task button and unhiding the form
let newTaskButton = document.getElementById("new-task-button");
newTaskButton.addEventListener("click" , showTaskForm);


// Clicking Submit in form and hiding it
taskForm.addEventListener("submit" , hideTaskForm);




/*Function study

document.getElementById("new-task-button").addEventListener("click", function(){
    greet(document.getElementById("task-title").value)
});

function greet (name) {
    console.log(`Hello ${name}`)
}

*/
