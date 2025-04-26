const removingRow = (data , row) => {
    data.splice (row - 1 , 1);
    return data;
}