const UserModel = require('../models/userModel');

const verifySingleUser = async (req, res, next) => {
  const { userEmail } = req.body;
  const user = await UserModel.findUserByEmail(userEmail);
  if (user !== null) {
    return res.status(409).json({ message: 'Email já cadastrado' });
  }
  next();
};

module.exports = { verifySingleUser };