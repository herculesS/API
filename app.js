const express = require('express');
const app = express();

const cadastroRoutes = require('./cadastro/cadastro');
const loginRoutes = require('./login/login');
const cotacaoRoutes = require('./cotacaoBTC/cotacaoBTC');
const ordemRoutes = require('./ordem/ordem');

app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);
app.use('/cotacaoBTC', cotacaoRoutes);
app.use('/ordem', ordemRoutes);



const cron = require('./cotacaoBackground/cotacaoCron');

module.exports = app;