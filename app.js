const express = require('express');
const app = express();

const cadastroRoutes = require('./cadastro/cadastro');
const loginRoutes = require('./login/login');

app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);

module.exports = app;