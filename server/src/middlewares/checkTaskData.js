const Joi = require('joi');

const validateTaskBody = (req, res, next) => {
  // const {
  //   userId,
  //   taskTitle,
  //   taskDetails,
  //   taskStatus,
  //   taskCreationDate,
  //   taskForecastDate,
  //   taskDoneDate,
  // } = req.body;
  const schema = Joi.object().keys({
    userId: Joi.string().required(),
    taskTitle: Joi.string().required(),
    taskDetails: Joi.required(),
    taskStatus: Joi.string().required(),
    taskCreationDate: Joi.string().required(),
    taskForecastDate: Joi.required(),
    taskDoneDate: Joi.required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error.message);
    return res.status(400).json({ message: 'Dados inválidos. Tente novamente.' });
  }
  next();
};

module.exports = { validateTaskBody };