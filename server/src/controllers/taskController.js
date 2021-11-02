const TaskModel = require('../models/taskModel');
const TaskService = require('../services/taskService');

const createTask = async (req, res) => {
  const task = req.body;
  const result = await TaskModel.createTask(task);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(result.code).json(result.task);
};

const findTasksByUserId = async (req, res) => {
  const { userId } = req.body;
  const result = await TaskService.findTasksByUserId(userId);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(result.code).json(result.tasks);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const newTaskData = req.body;
  const result = await TaskService.updateTask(id, newTaskData);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(result.code).json(result.task);
};

module.exports = {
  createTask,
  findTasksByUserId,
  updateTask,
};