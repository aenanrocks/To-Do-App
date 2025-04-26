// Generating unique IDs
const genID = (task , data) => {
    task["task_num"] = data.length +1;
    
};

// Category output on Table
// Object lookup method
const categorySelection = (category) => ({
    1 : "Personal" ,
    3 : "Work"
})[category] || "Other" ; // This would be default value

// This is old code
// const categorySelection = (category) => {
//     if (category == "category-personal"){
//         return "Personal";
//     }else if (category == "category-work"){
//         return "Work";
//     }else{
//         return "Other";
//     }
// }

// Task Priority output on Table
const prioritySelection = (priority) => ({
    2 : "Normal" ,
    1 : "Low" 
})[priority] || "High" ;