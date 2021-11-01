const Joi = require('joi');

const verifyUserData = (req, res, next) => {
  const { userName, userEmail, userDepartament, userPassword } = req.body;
  const data = { userName, userEmail, userDepartament, userPassword };
  const schema = Joi.object().keys({
    userName: Joi.string().min(5).required(),
    userEmail: Joi.string().email().required(),
    userDepartament: Joi.string().required(),
    userPassword: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(data);
  if (error) {
    return res.status(400).json({ message: 'Dados inválidos. Tente novamente.' });
  }
  next();
};

module.exports = { verifyUserData };