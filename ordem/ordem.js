var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../db');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var VerifyToken = require('../auth/VerifyToken');

router.get('/', VerifyToken, function(req, res, next) {

   db.query('SELECT * FROM tb_ordem where usuarioid = ?', req.userId, function(err, result) {
      	if (err) {
      		res.status(404).send({msg:'Algo inexperado aconteceu tente novamente.'});
      	} 
      	res.status(200).json(result);			
	});

});

router.post('/', VerifyToken, function(req, res, next) {
	if(!req.body.data || !req.body.qtdbtc || !req.body.valorporbtc || !req.body.tipo) {
		res.status(404).send({msg: 'Requisão incorreta.'});
	}
	const ordem = {
		usuarioid: req.userId,
		data: req.body.data,
		qtdbtc: req.body.qtdbtc,
		valorporbtc: req.body.valorporbtc,
		tipo: req.body.tipo

	};
   db.query('INSERT INTO tb_ordem SET ?', ordem, function(err, result) {
      	if (err) {
      		res.status(400).send({msg:'Erro ao criar ordem.'});
      	} 
      	res.status(201).send({msg: 'Recurso criado com sucesso.'});			
	});

});

module.exports = router;