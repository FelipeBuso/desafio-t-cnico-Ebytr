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

module.exports = {
  createTask,
};