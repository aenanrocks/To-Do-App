const sortTable = (table , key , direction) => {
    // Getting table values and making a temporary table
    let tempTable = table;
    let tempKey = key;

    // Sorting with ID    
    if (tempKey === "task_num" && direction == "asc"){

        // Making sorted table descendng
        tempTable = tempTable.sort ( ( a , b ) => b[key] - a[key]);
        
        // Direction change
        directionChange("dsc");

        // Chnaging Arrow direction
        document.getElementById("head-id").innerHTML = "ID &darr;";        

    }else if(tempKey === "task_num" && direction == "dsc"){

        // Making sorted table ascending
        tempTable = tempTable.sort ( ( a , b ) => a[key] - b[key]);

        // Direction change
        directionChange("asc")

        // Chnaging Arrow direction
        document.getElementById("head-id").innerHTML = "ID &uarr;";

    }
    
    // Sorting with Priority
    if (tempKey === "task_priority" && direction == "asc"){

        console.log("working")

        // Making sorted table descendng
        tempTable = tempTable.sort ( ( a , b ) => b[key] - a[key]);
        
        // Direction change
        directionChange("dsc");

        // Chnaging Arrow direction
        document.getElementById("head-priority").innerHTML = "Priority &darr;"; 

    }else if (tempKey === "task_priority" && direction == "dsc"){
        console.log("this too working")

        // Making sorted table ascending
        tempTable = tempTable.sort ( ( a , b ) => a[key] - b[key]);

        // Direction change
        directionChange("asc")

        // Chnaging Arrow direction
        document.getElementById("head-priority").innerHTML = "Priority &uarr;";

    }

    // Sorting with category
    if (tempKey === "task_category" && direction == "asc"){

        console.log("working")

        // Making sorted table descendng
        tempTable = tempTable.sort ( ( a , b ) => b[key] - a[key]);
        
        // Direction change
        directionChange("dsc");

        // Chnaging Arrow direction
        document.getElementById("head-category").innerHTML = "Category &darr;"; 

    }else if (tempKey === "task_category" && direction == "dsc"){
        console.log("this too working")

        // Making sorted table ascending
        tempTable = tempTable.sort ( ( a , b ) => a[key] - b[key]);

        // Direction change
        directionChange("asc")

        // Chnaging Arrow direction
        document.getElementById("head-category").innerHTML = "Category &uarr;";

    }
        
    // Hiding original table
    tableBody = document.getElementById("table-data");
    tableBody.innerHTML = "";

    // updating table with sorted data
    updateTable(tempTable);


};

