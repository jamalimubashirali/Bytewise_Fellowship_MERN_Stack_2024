export const getAllTasks = (req, res) => {
    res.send(`Everything is working fine after changes`);
}

export const addNewTask = (req, res) =>{
    res.json(req.body);
}

export const getTaskById = (req, res) => {
    res.send(`Getting a Task by the id`);
}

export const updateTaskbyId = (req, res) => {
    res.send(`This updates the task by the id`);
}

export const deleteTaskById = (req, res) => {
    res.send(`Task will be deleted by its using its ID`);
}