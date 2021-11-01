const route = require('express').Router();

const UserController = require('../controllers/userController');
const { verifyUserData } = require('../middlewares/checkUserData');

route.post('/', verifyUserData, UserController.createUser);

module.exports = route;