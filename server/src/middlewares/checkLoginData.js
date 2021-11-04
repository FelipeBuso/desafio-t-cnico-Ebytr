const Joi = require('joi');

const verifyLoginBody = async (req, res, next) => {
  const { userEmail, userPassword } = req.body;
  const data = { userEmail, userPassword };
  const schema = Joi.object().keys({
    userEmail: Joi.string().email().required(),
    userPassword: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(data);
  if (error) {
    return res.status(400).json({ message: 'Dados inválidos. Tente novamente.' });
  }
  next();
};

module.exports = { verifyLoginBody };