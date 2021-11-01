const route = require('express').Router();

const UserController = require('../controllers/userController');
const { verifyUserData } = require('../middlewares/checkUserData');
const { verifySingleUser } = require('../middlewares/checkSingleUser');

route.post('/', verifyUserData, verifySingleUser, UserController.createUser);

module.exports = route;