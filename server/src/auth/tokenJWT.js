const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.TOKEN_SECRET;
const jwtConfig = {
  expiresIn: process.env.JWT_CONFIG_EXPIRES,
  algorithm: process.env.JWT_CONFIG_ALGORITHM,
};

const generateToken = async (user) => {
  const { _id, userName, userEmail, userRole } = user;
  const generatedToken = jwt.sign({ _id, userName, userEmail, userRole }, secret, jwtConfig);
  return {
    user: { _id, userName, userEmail, userRole },
    userToken: generatedToken,
  };
};

module.exports = {
  generateToken,
};