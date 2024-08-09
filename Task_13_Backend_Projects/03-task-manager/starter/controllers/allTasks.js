import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg : "An Error has occured on the server side"});
    }
}

export const addNewTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({msg : "An Error has occured"});
    }
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