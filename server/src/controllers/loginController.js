const LoginService = require('../services/loginService');

const login = async (req, res) => {
  const { userEmail } = req.body;
  const result = await LoginService.login(userEmail);
  if (result.message) {
    return res.status(result.code).json({ message: result.message });
  }
  res.status(result.code).json(result.user);
};

module.exports = { login };