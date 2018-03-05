const express = require('express');
const app = express();

const cadastroController = require('./cadastro/cadastro');
const loginController = require('./login/login');
const cotacaoController = require('./cotacaoBTC/cotacaoBTC');
const ordemController = require('./ordem/ordem');

// definicao das rotas aceitas
app.use('/cadastro', cadastroController);
app.use('/login', loginController);
app.use('/cotacaoBTC', cotacaoController);
app.use('/ordem', ordemController);

// servico em background para obtencao das cotacoes
const cron = require('./cotacaoBackground/cotacaoCron');

// Lida com rotas invalidas.
app.use((req, res, next) => {
  res.status(404).send({msg: 'Recurso não encontrado.'});
});

module.exports = app;