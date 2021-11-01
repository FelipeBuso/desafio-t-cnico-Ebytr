const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const generatorEncryptedPassword = async (userPassword) => {
  const encryptedPassword = bcrypt.hashSync(userPassword, salt);
  return encryptedPassword;
};

module.exports = { generatorEncryptedPassword };