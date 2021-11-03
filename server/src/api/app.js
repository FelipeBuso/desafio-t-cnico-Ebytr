const express = require('express');
const cors = require('cors');

const UserRoutes = require('../routes/userRoutes');
const LoginRoutes = require('../routes/loginRoutes');
const TaskRoutes = require('../routes/taskRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', UserRoutes);
app.use('/login', LoginRoutes);
app.use('/tasks', TaskRoutes);

module.exports = app;