import Task from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find();
        if (allTasks.length === 0) {
            return res.status(404).send('No tasks found');
        }
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const addTask = async (req, res) => {
    const { taskName, due_date } = req.body;
    if (!taskName || !due_date) {
        return res.status(400).send('Please provide name and due date');
    }
    try {
        const newTask = await Task.create({ taskName, due_date });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTask = await Task.findByIdAndDelete(id);
        res.status(200).send('Task deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, data);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
}