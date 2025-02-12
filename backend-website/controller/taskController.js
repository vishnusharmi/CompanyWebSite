const Task = require('../models/tasksModel');
const taskServices = require('../services/task-service')


const getAllTasks = async (req, res) => {
    try {
        const allTasks = await taskServices.getTasks()
        res.status(200).json({message:'All tasks retrieved', allTasks});
        
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
};


const getSingleTask = async (req, res) => {
    try {
        
        const singleTask = await taskServices.getSingleTask(req.params.id)
        res.status(200).json({message:'task retrieved Successfully' , singleTask});

    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ error: 'Failed to retrieve task' });
    }
};

const createTask = async (req, res) => {
    try {

     const createdTask = await taskServices.saveTask(req.body);
        res.status(201).json({message:'Task Created' , createdTask});

    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};


const updateTask = async (req, res) => {
    try {
         const updatedTask = await taskServices.updateTask(req.params.id)
        res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: 'Failed to update task' });
    }
};

const deleteTask = async (req, res) => {
    try {
         const deletedTask = await taskServices.deleteTask(req.params.id)
        res.status(200).json({ message: 'Task deleted successfully' , deletedTask});
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

module.exports = { getAllTasks, getSingleTask, createTask, updateTask, deleteTask };
