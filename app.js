const express = require('express');
const app = express();

const cadastroRoutes = require('./cadastro/cadastro');
const loginRoutes = require('./login/login');
const cotacaoRoutes = require('/cotacaoBTC/cotacaoBTC');

app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);
app.use('/cotacaoBTC', cotacaoRoutes);



const cron = require('./cotacaoBackground/cotacaoCron');

module.exports = app;