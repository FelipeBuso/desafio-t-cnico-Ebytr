const { getConnection } = require('./connection');

const login = async (userEmail) => {
  try {
    const usersCollection = await getConnection()
      .then((db) => db.collection('users'));
    const user = await usersCollection
      .findOne({ userEmail });
    return user;
  } catch (error) {
    return { code: 500, message: 'Internal Error Server' };
  }
};

module.exports = { login };