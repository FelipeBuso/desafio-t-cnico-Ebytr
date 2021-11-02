const route = require('express').Router();

const TaskController = require('../controllers/taskController');
const { validateToken } = require('../middlewares/checkToken');
const { validateTaskBody } = require('../middlewares/checkTaskData');

route.post('/', validateToken, validateTaskBody, TaskController.createTask);
route.get('/', validateToken, TaskController.findTasksByUserId);

module.exports = route;