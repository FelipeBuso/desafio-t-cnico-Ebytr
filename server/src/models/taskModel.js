const { ObjectId } = require('mongodb');
const { getConnection } = require('./connection');

const errorServer = { code: 500, message: 'Internal Error Server' };

const createTask = async (task) => {
  try {
    const tasksCollection = await getConnection()
      .then((db) => db.collection('tasks'));
    const { insertedId: _id } = await tasksCollection
      .insertOne({ ...task });
    return { code: 201, task: { _id, ...task } };
  } catch (error) {
    return errorServer;
  }
};

const findTasksByUserId = async (userId) => {
  try {
    const tasksCollection = await getConnection()
      .then((db) => db.collection('tasks'));
    const taskByUserId = await tasksCollection
      .find({ userId }).toArray();
    return { code: 200, tasks: taskByUserId };
  } catch (error) {
    return errorServer;
  }
};

const updateTask = async (id, newTaskData) => {
  try {
    const tasksCollection = await getConnection()
      .then((db) => db.collection('tasks'));
    await tasksCollection
      .updateOne({ _id: ObjectId(id) }, { $set: { ...newTaskData } });
    return { code: 200, task: newTaskData };
  } catch (error) {
    return errorServer;
  }
};

module.exports = {
  createTask,
  findTasksByUserId,
  updateTask,
};