import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg : "An Error has occured on the server side"});
    }
}

export const addNewTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg : "An Error has occured"});
    }
}

export const getTaskById = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id : taskID});
        if(!task) {
            return res.status(404).json({msg : `The task with id ${taskID} does not exists`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : `An Error has occured`});
    }
}

export const updateTaskbyId = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findByIdAndUpdate({_id : taskID}, req.body , {
            new: true, 
            runValidators: true,
        })
        if(!task){
            return res.status(404).json({msg : `The task with id ${taskID} does not exists`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg : `An Error has Occured`});
    }
}

export const deleteTaskById = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id : taskID});
        if(!task) {
            return res.status(404).json({msg : `The task with id ${taskID} does not exists`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : `An Error has occured`});
    }
}
