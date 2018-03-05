var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../db');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');



router.post('/', function(req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.senha, 8);
  
  const usuario = { email: req.body.email,
  					senha: hashedPassword
  					};
  db.query('INSERT INTO tb_usuario SET ?', usuario, function(err, result) {
      if (err) {
      	res.status(404).send({msg: 'Cadastro não realizado. Tente novamente.'})
      } 
      	var token = jwt.sign({_id: result.insertId} , config.secret, {
      	expiresIn: 7200
    	});
    	res.status(201).send({ auth: true, token: token });
    });

  

    
});

module.exports = router;