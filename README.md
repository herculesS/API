"# API - teste de desenvolvimento" 
Funções publicas
/cadastro - espera um post com body json com email e senha. Retorna um token para acesso dos recursos privados
/login - espera um post com body json com email e senha.
/cotacaoBTC - espera um get, retorna um array em json com a cotação atual na primeira posiçãi e as antigas em ordem decrescente de data.

Funções privadas (só acessadas após login)
/ordem get retorna lista de ordem para o usuario logado.
	   post salva uma nova ordem para o usuario logado.


Método de autenticação utilizado: JSON Web Tokens, https://jwt.io/introduction/

Módulos utilizados
	"bcryptjs": "^2.4.3",
    "body-parser": "^1.18.2",
    "cron": "^1.3.0",
    "express": "^4.16.2",
    "jsonwebtoken": "^8.2.0",
    "mysql": "^2.15.0",
    "node-coinmarketcap": "^0.2.0",
    "poloniex-api-node": "^1.8.1"
