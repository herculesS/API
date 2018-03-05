var CronJob = require('cron').CronJob;
var db = require('../db');
const Poloniex = require('poloniex-api-node');
var CoinMarketCap = require("node-coinmarketcap");

let poloniex = new Poloniex();
var coinmarketcap = new CoinMarketCap();


var job = new CronJob('* * * * *', function() {
	coinmarketcap.get("bitcoin", coin => {
  		cotacao = {
				moeda: 'BTC',
				valor: coin.price_usd,
				data: new Date(),
				exchange: 'USD_BTC' 
				};

				db.query('INSERT INTO tb_cotacao SET ?', cotacao, function(err, result) {
      				if (err) {
      					console.log(err);
      				}
      				
	    		});
	});
 
   }, null,
   true, 
   'America/Sao_Paulo'
 );

module.exports = job;