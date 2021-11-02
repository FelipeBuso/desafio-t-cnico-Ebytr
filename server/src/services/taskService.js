const { ObjectId } = require('mongodb');
const TaskModel = require('../models/taskModel');

const findTasksByUserId = async (userId) => {
  if (!ObjectId.isValid(userId)) {
    return { code: 400, message: 'Usuário não encontrado.' };
  }
  const result = await TaskModel.findTasksByUserId(userId);
  if (result === null) {
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

module.exports = {
  findTasksByUserId,
  updateTask,
};