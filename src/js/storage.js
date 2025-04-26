
const storingTask = () => {

    // DOM Querying 
    const taskNum = document.getElementById("task-num").value,
        taskTitle = document.getElementById("task-title").value,
        taskDescription = document.getElementById("task-description").value,
        startDateTime = document.getElementById("start-datetime").value,
        finishDateTime = document.getElementById("finish-datetime").value,
        taskCategory = document.getElementById("task-category").value,
        taskPriority = document.getElementById("task-priority").value;

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
        storingData(allTaskData);
    }else{
        // If there is nothing in storage
        taskDetails["task_num"] = 1;
        let allTaskData = [taskDetails];
        storingData(allTaskData);
    }
}

const storingData = (data) => {
    localStorage.setItem("taskDetails", JSON.stringify(data)); 
}
