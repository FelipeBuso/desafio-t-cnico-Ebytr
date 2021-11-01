require('dotenv').config();

const app = require('./app');

const PORT = process.env.CONNECTION_PORT;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));