var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {
	db.query('SELECT * FROM tb_cotacao order by data desc', function(err, result) {
      	if (err) {
      		res.status(404).send({msg:'Algo inexperado aconteceu tente novamente.'});
      	} 
      	res.status(200).json(result);			
	});
});
module.exports = router;