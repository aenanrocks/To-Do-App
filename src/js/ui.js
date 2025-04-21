// Updating table with new data

let tableData = document.getElementById("table-data");
const updateTable = () => {
    let allTaskData = JSON.parse(localStorage.getItem("taskDetails"));
    
    if (allTaskData != null) {
        for (let i = 0 ; i < allTaskData.length ; i++){
            console.log(i);
            let rowAddition = "<tr> \
                    <td>" + allTaskData[i].task_num + "</td> \
                    <td>" + allTaskData[i].task_title + "</td> \
                    <td>" + allTaskData[i].task_description + "</td> \
                    <td>" + Date(allTaskData[i].finish_datetime) + "</td> \
                    <td>" + (Date(allTaskData[i].finish_datetime) - Date(allTaskData[i].start_datetime)) + "</td> \
                    <td><button id='edit-row'>Edit</button></td> \
                    <td><button id='delete-row'>Delete</button></td> \
                    <td><button id='mark-complete'>Done?</button></td> \
                </tr>";
            tableData.insertAdjacentHTML('beforeend', rowAddition);
        }
    }
}

