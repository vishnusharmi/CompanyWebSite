const express = require('express');
const routes = express.Router();
const tasks = require('../controllers/taskControllers')


routes.get('/tasks' , tasks.getAllTasks);
routes.get('/tasks/:id', tasks.getSingleTask);
routes.put('/tasks/:id', tasks.updateTask);
routes.post('/tasks' , tasks.createTask);
routes.delete('/tasks/:id', tasks.deleteTask)

module.exports = routes;