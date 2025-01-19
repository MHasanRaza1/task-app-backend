import express from 'express';
import { addTask, deleteTask, getAllTasks, updateTask } from '../controllers/taskController.js';

const taskRoutes = express.Router();

taskRoutes.get('/', getAllTasks);
taskRoutes.post('/add', addTask);
taskRoutes.delete('/delete/:id', deleteTask);
taskRoutes.put('/update/:id', updateTask);

export default taskRoutes;