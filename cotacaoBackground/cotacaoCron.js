var CronJob = require('cron').CronJob;
var db = require('../db');
const Poloniex = require('poloniex-api-node');
let poloniex = new Poloniex();

var job = new CronJob('* * * * *', function() {
 
	poloniex.returnTicker((err, ticker) => {
  		if (err) {
    		//console.log(err.message);
  		} else {
    		cotacao = {
				moeda: 'BTC',
				valor: ticker['BTC_ETH'].last,
				data: new Date(),
				exchange: 'BTC_ETH' 
				};

				db.query('INSERT INTO tb_cotacao SET ?', cotacao, function(err, result) {
      				if (err) {
      					throw err;
      				} 
      				
	    		});
    
    	}
	});
	
  }, null,
  true, 
  'America/Sao_Paulo'
);

module.exports = job;