var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {
	db.query('SELECT * FROM tb_cotacao', function(err, result) {
      	if (err) {
      		throw err;
      	} 
      				
	});
});
module.exports = router;