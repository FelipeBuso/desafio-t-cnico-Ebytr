const route = require('express').Router();

const TaskController = require('../controllers/taskController');
const { validateToken } = require('../middlewares/checkToken');
const { validateTaskBody } = require('../middlewares/checkTaskData');

route.get('/:id', validateToken, TaskController.findTasksById);
route.get('/user/:id', validateToken, TaskController.findTasksByUserId);
route.put('/:id', validateToken, validateTaskBody, TaskController.updateTask);
route.delete('/:id', validateToken, TaskController.deleteTask);
route.post('/', validateToken, validateTaskBody, TaskController.createTask);

module.exports = route;