
const storingTask = () => {

    // DOM Querying 
    let taskNum = document.getElementById("task-num").value;
    let taskTitle = document.getElementById("task-title").value;
    let taskDescription = document.getElementById("task-description").value;
    let startDateTime = document.getElementById("start-datetime").value;
    let finishDateTime = document.getElementById("finish-datetime").value;

    // This is to make sure the finish date is greater than start date
    // I will make sure this works
    // const startDate = new Date(startDateTime);
    // const finishDate = new Date(finishDateTime);
    // if (finishDate <= startDate){
    //     alert("The finish date and time should be after start date and time.")
    //     return;
    // }
    let taskCategory = document.getElementById("task-category").value;
    let taskPriority = document.getElementById("task-priority").value;

    const taskDetails = {task_num:taskNum , task_title:taskTitle , task_description:taskDescription , start_date_time:startDateTime , finish_date_time:finishDateTime , task_category:taskCategory , task_priority:taskPriority};

    // serialization of data / Storing form data in local storage

    if (localStorage.getItem("taskDetails") != null){
        // If there is something in storage
        let allTaskData = JSON.parse(localStorage.getItem("taskDetails"));

        // This is just to learn how to call functions in other files with values
        genID(taskDetails , allTaskData);
        // I can use this code anytime, and it will work same as the function above, this ijust to learn that the function can be later edited by other files
        // taskDetails["task_num"] = allTaskData.length + 1;
        
        allTaskData.push(taskDetails);
        localStorage.setItem("taskDetails", JSON.stringify(allTaskData)); 
    }else{
        // If there is nothing in storage
        taskDetails["task_num"] = 1;
        let allTaskData = [taskDetails];
        localStorage.setItem("taskDetails", JSON.stringify(allTaskData));       
    }

}
