const sortTable = (table , key , direction = 'asc') => {
    // Getting table values and making a temporary table
    let tempTable = table;
    
    // console.log("after" , tempTable.sort ( ( a , b ) => b.task_num - a.task_num));

    // Making sorted table
    tempTable = tempTable.sort ( ( a , b ) => b.task_num - a.task_num);
    

    // updating table with sorted data
    updateTable(tempTable);
};