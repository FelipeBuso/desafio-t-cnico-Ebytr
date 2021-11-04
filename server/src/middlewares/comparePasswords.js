const bcrypt = require('bcrypt');

const UserModel = require('../models/userModel');

const comparePassword = async (req, res, next) => {
  const { userEmail, userPassword } = req.body;
  const lookupUser = await UserModel.findUserByEmail(userEmail);
  if (lookupUser === null || !bcrypt.compareSync(userPassword, lookupUser.userPassword)) {
    return res.status(400).json({ message: 'Dados inválidos. Tente novamente.' });
  }
  next();
};

module.exports = { comparePassword };