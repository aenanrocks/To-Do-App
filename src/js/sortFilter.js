const sortTable = (table , key , direction) => {
    // Getting table values and making a temporary table
    let tempTable = table;
    
    if (key == "task_num" && direction == "asc"){

        // Making sorted table descendng
        tempTable = tempTable.sort ( ( a , b ) => b[key] - a[key]);
        
        // Direction change
        directionChange("dsc")   ;

    }else{

        // Making sorted table ascending
        tempTable = tempTable.sort ( ( a , b ) => a[key] - b[key]);

        // Direction change
        directionChange("asc")

    }
        
    // Hiding original table
    tableBody = document.getElementById("table-data");
    tableBody.innerHTML = "";

    // updating table with sorted data
    updateTable(tempTable);


};

