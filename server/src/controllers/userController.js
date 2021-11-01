const UserService = require('../services/userService');

const createUser = async (req, res) => {
  const { userName, userEmail, userDepartament, userPassword } = req.body;
  const user = { userName, userEmail, userDepartament, userPassword };
  const result = await UserService.createUser(user);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(result.code).json(result.user);
};

module.exports = {
  createUser,
};