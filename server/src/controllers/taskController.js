const TaskModel = require('../models/taskModel');

const createTask = async (req, res) => {
  const task = req.body;
  const result = await TaskModel.createTask(task);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(result.code).json(result.task);
};

module.exports = {
  createTask,
};