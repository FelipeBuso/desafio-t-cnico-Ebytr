const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserModel = require('../models/userModel');

const secret = process.env.TOKEN_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, secret);
    const user = await UserModel.findUserByEmail(decoded.userEmail);
    if (user === null) {
      return res.status(404).json({ message: 'Usuário não cadastrado.' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { validateToken };