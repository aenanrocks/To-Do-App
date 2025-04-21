
const storingTask = () => {

    // DOM Querying 
    let taskNum = document.getElementById("task-num").value;
    let taskTitle = document.getElementById("task-title").value;
    let taskDescription = document.getElementById("task-description").value;
    let startDateTime = document.getElementById("start-datetime").value;
    let finishDateTime = document.getElementById("finish-datetime").value;
    let taskCategory = document.getElementById("task-category").value;
    let taskPriority = document.getElementById("task-priority").value;

    const taskDetails = {task_num:taskNum , task_title:taskTitle , task_description:taskDescription , start_date_time:startDateTime , finish_date_time:finishDateTime , task_category:taskCategory , task_priority:taskPriority};

    // serialization of data / Storing form data in local storage

    // If there is nothing in storage
    if (localStorage.getItem("taskDetails") == null){
        taskDetails["task_num"] = 1;
        let allTaskData = [taskDetails];
        localStorage.setItem("taskDetails", JSON.stringify(allTaskData));
    }else{
        // If there is something in storage
        let allTaskData = JSON.parse(localStorage.getItem("taskDetails"));
        genID(taskDetails , allTaskData);
        allTaskData.push(taskDetails);
        localStorage.setItem("taskDetails", JSON.stringify(allTaskData));        
    }

}