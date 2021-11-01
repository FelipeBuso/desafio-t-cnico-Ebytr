const UserModel = require('../models/userModel');

const { generatorEncryptedPassword } = require('../middlewares/encryptionUserPassword');

const createUser = async (user) => {
  const { userName, userEmail, userDepartament } = user;
  let { userPassword } = user;
  userPassword = await generatorEncryptedPassword(userPassword);
  const newDataUser = { userName, userEmail, userDepartament, userPassword };
  const userRole = 'user';
  const userStatus = 'active';
  const result = await UserModel.createUser(newDataUser, userRole, userStatus);
  return result;
};

module.exports = {
  createUser,
};