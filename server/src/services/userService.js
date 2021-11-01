const UserModel = require('../models/userModel');

const createUser = async (user) => {
  const userRole = 'user';
  const userStatus = 'active';
  const result = await UserModel.createUser(user, userRole, userStatus);
  return result;
};

module.exports = {
  createUser,
};