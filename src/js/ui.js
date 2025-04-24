// Updating table with new data

// This will be used later for getting proper time
const timeOptions = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

let tableData = document.getElementById("table-data");

// Getting data from storage
let allTaskData = JSON.parse(localStorage.getItem("taskDetails"));

const updateTable = () => {
        
    if (allTaskData != null) {
        for (let i = 0 ; i < allTaskData.length ; i++){

            // This adds new rows and td, making it dynamic ?            
            let rowAddition = "<tr> \
                    <td>" + allTaskData[i].task_num + "</td> \
                    <td>" + prioritySelection(allTaskData[i].task_priority) + "</td> \
                    <td>" + categorySelection(allTaskData[i].task_category) + "</td> \
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

console.log(allTaskData);
// I get the key from main.js and give the value to sortFilter.js
const keyAndTable = (key) => {
    sortTable(allTaskData,key);
};
