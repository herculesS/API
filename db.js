const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'apidb'
});
connection.connect((err) => {
  if (err) {
  	console.log('Erro ao se conectar à database.');
  	throw err;
  }
  
});

module.exports = connection;