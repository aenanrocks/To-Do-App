// Updating table with new data

let tableData = document.getElementById("table-data");

// Getting data from storage
let originalData = JSON.parse(localStorage.getItem("taskDetails"));

const updateTable = (allTaskData = originalData) => {
        
    if (allTaskData != null) {
        for (let i = 0 ; i < allTaskData.length ; i++){

            // Converting time to readable format

            const formattedDate = convertDateTime(allTaskData[i].finish_date_time);
            

            // This adds new rows and td, making it dynamic ?            
            let rowAddition = "<tr> \
                    <td>" + allTaskData[i].task_num + "</td> \
                    <td>" + prioritySelection(allTaskData[i].task_priority) + "</td> \
                    <td>" + categorySelection(allTaskData[i].task_category) + "</td> \
                    <td>" + allTaskData[i].task_title + "</td> \
                    <td>" + allTaskData[i].task_description + "</td> \
                    <td>" + formattedDate + "</td> \
                    <td>" + ((Date.parse(allTaskData[i].finish_date_time) - Date.parse(allTaskData[i].start_date_time))/1000) + "</td> \
                    <td><button id='edit-row'>Edit</button></td> \
                    <td><button id='mark-complete-" + i +"'>Done or Delete ?</button></td> \
                </tr>";
            tableData.insertAdjacentHTML('beforeend', rowAddition);
        }
    }
}

let direction = "asc";
const directionChange = (direc) => { direction = direc};

// I get the key from main.js and give the value to sortFilter.js
const keyAndTable = (key) => {
    
    sortTable(originalData,key,direction);
};


// For actions, we now have rows and data from which we need to do something
const rowToData = (row) => {

    const tempData = originalData;
    // Calling action function
    removingRow(tempData,row);
    storingData(tempData);
    location.reload();

}
