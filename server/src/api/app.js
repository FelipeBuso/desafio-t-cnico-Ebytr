const express = require('express');

const UserRoutes = require('../routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/users', UserRoutes);

module.exports = app;