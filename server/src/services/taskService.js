const { ObjectId } = require('mongodb');
const TaskModel = require('../models/taskModel');

const findTasksByUserId = async (userId) => {
  if (!ObjectId.isValid(userId)) {
    return { code: 400, message: 'Id inválido.' };
  }
  const result = await TaskModel.findTasksByUserId(userId);
  if (result.tasks === null) {
    return { code: 204, message: 'Nenhuma tarefa cadastrada.' };
  }
  return result;
};

const updateTask = async (id, newTaskdata) => {
  if (!ObjectId.isValid(id)) {
    return { code: 400, message: 'Tarefa não encontrada' };
  }
  const result = await TaskModel.updateTask(id, newTaskdata);
  return result;
};

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { code: 400, message: 'Tarefa não encontrada' };
  }
  const result = await TaskModel.deleteTask(id);
  return result;
};

const findTaskById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return { code: 400, message: 'Id inválido.' };
  }
  const result = await TaskModel.findTaskById(id);
  if (result.task === null) {
    return { code: 204, message: 'Tarefa não encontrada.' };
  }
  return result;
};

module.exports = {
  findTasksByUserId,
  updateTask,
  deleteTask,
  findTaskById,
};