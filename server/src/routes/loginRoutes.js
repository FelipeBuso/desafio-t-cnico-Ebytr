const route = require('express').Router();

const LoginController = require('../controllers/loginController');
const { verifyLoginBody } = require('../middlewares/checkLoginData');
const { comparePassword } = require('../middlewares/comparePasswords');

route.post('/', verifyLoginBody, comparePassword, LoginController.login);

module.exports = route;