const removingRow = (data , rowNum) => {
    data.splice (rowNum - 1 , 1);
    return data;
}

const editingRow = (data , rowNum) => {
    let editingForm = '<form id="editing-form"> \
                    <fieldset> \
                        <legend>Editing Form</legend> \
                        \
                        <!-- Task Title --> \
                        <div> \
                            <label for="task-title">Task : </label> \
                            <input type="text" id="task-title" placeholder="' + data[rowNum-1].task_title + '" > \
                        </div> \
                        \
                        <!-- Task Description --> \
                        <div> \
                            <label for="task-description">Task Description : </label> \
                            <textarea type="text" id="task-description" placeholder="' + data[rowNum-1].task_description + '"></textarea> \
                        </div> \
                        \
                        <!-- Task start date and time --> \
                        <div> \
                            <label for="start-datetime">Start Date and Time : </label> \
                            <input type="datetime-local" id="start-datetime" name="start-datetime" placeholder="' + data[rowNum-1].start_date_time + '"> \
                        </div> \
                        \
                        <!-- Task finish date and time --> \
                        <div> \
                            <label for="finish-datetime">Finish Date and Time : </label> \
                            <input type="datetime-local" id="finish-datetime" name="finish-datetime" placeholder="' + data[rowNum-1].finish_date_time + '" > \
                        </div> \
                        \
                        <!-- Submission Button --> \
                        <button type="submit">Submit</button> \
                        \
                    </fieldset> \
                  </form>';

    document.getElementsByClassName("row-data")[rowNum-1].insertAdjacentHTML('beforeend', editingForm);
    const editedForm = document.getElementById("editing-form");
}
