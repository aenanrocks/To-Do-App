// Generating unique IDs
const genID = (task , data) => {
    if (data.length === 0) return task["task_num"] = 1;
    task["task_num"] = data[data.length-1].task_num + 1;
    
};

// Category output on Table
// Object lookup method
const categorySelection = (category) => ({
    1 : "Personal" ,
    3 : "Work"
})[category] || "Other" ; // This would be default value

// Task Priority output on Table
const prioritySelection = (priority) => ({
    2 : "Normal" ,
    1 : "Low" 
})[priority] || "High" ;

const convertDateTime = (dateTime) => {
    const tempDateTime = dateTime;
    const dateObj = new Date(tempDateTime);
    const formattedDate = dateObj.toLocaleString('en-UK', {
        month: 'short',    
        day: 'numeric',    
        year: 'numeric',   
        hour: '2-digit',   
        minute: '2-digit', 
        hour12: false      
        });

    return formattedDate;
};
