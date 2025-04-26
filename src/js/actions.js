const removingRow = (data , row) => {
    data.splice (row - 1 , 1);
    return data;
}

const editingRow = (data , row) => {
    console.log(row);
}