const LoginModel = require('../models/loginModel');
const { generateToken } = require('../auth/tokenJWT');

const login = async (userEmail) => {
  const result = await LoginModel.login(userEmail);
  if (result.message) return result;
  const tokenUser = await generateToken(result);
  return { code: 200, user: tokenUser };
};

module.exports = { login };