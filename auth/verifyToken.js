var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'Token não enviado.' });

  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Falha de autenticação. Tente novamente.' });

    // if everything good, save to request for use in other routes
    console.log(decoded);
    req.userId = decoded._id;
    next();
  });
}

module.exports = verifyToken;