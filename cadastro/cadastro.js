var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var db = require('../db');

router.post('/', function(req, res) {
	console.log(req.body);
  
  var hashedPassword = bcrypt.hashSync(req.body.senha, 8);
  
  const usuario = { email: req.body.email,
  					senha: hashedPassword
  					};
  db.query('INSERT INTO tb_usuario SET ?', usuario, function(err, result) {
      if (err) {
      	throw err;
      } 
      	var token = jwt.sign({_id: result.insertId} , config.secret, {
      	expiresIn: 86400 // expires in 24 hours
    	});
    	res.status(200).send({ auth: true, token: token });
    });

  

    
});

module.exports = router;