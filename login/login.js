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

  db.query('SELECT * FROM tb_usuario WHERE email like ?', req.body.email, function(err, result) {
      if (err) {
      	res.status(404).json({msg: "Erro no login!"});
      } else {

      
		console.log(result[0]);
      	if(!bcrypt.compareSync(req.body.senha,result[0].senha)){
      		res.status(404).json({msg: "Erro no login!"});
      	}else {
      		var token = jwt.sign({_id: result.id} , config.secret, {
      		expiresIn: 86400 // expires in 24 hours
    		});
    		res.status(200).send({ auth: true, token: token });
    	}
    }
    });

  

    
});

module.exports = router;