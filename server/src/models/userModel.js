const { getConnection } = require('./connection');

const errorServer = { code: 500, message: 'Internal Error Server' };

const createUser = async (user, userRole, userStatus) => {
  try {
    const usersCollection = await getConnection()
      .then((db) => db.collection('users'));
    const { insertedId: _id } = await usersCollection
      .insertOne({ ...user, userRole, userStatus });
    const { userName, userEmail, userDepartament } = user;
    return {
      code: 201, user: { _id, userName, userEmail, userDepartament, userRole, userStatus },
    };
  } catch (error) {
    return errorServer;
  }
};

const findUserByEmail = async (userEmail) => {
  const usersCollection = await getConnection()
  .then((db) => db.collection('users'));
  const user = await usersCollection
    .findOne({ userEmail });
  return user;
};

module.exports = {
  createUser,
  findUserByEmail,
};