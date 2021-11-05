const route = require('express').Router();

const TaskController = require('../controllers/taskController');
const { validateToken } = require('../middlewares/checkToken');
const { validateTaskBody } = require('../middlewares/checkTaskData');

route.post('/', validateToken, validateTaskBody, TaskController.createTask);
route.get('/:id', validateToken, TaskController.findTasksByUserId);
route.put('/:id', validateToken, validateTaskBody, TaskController.updateTask);
route.delete('/:id', validateToken, TaskController.deleteTask);

module.exports = route;