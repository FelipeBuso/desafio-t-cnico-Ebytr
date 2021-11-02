const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.TOKEN_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { validateToken };