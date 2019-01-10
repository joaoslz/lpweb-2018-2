
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, resp) => resp.render('index') );

app.get('/produtos', (req, resp) => resp.render('produtos/listagem') );

app.listen(3000, function() {
    console.log('Servidor executando com express ...');
});


/* 
app.get('/produtos', function(req, resp) {
    resp.send('<html><h1>Listagem de Produtos</h1></html>');
}); */

/* app.get('/', (req, resp) => resp.send('<html><h1>Página Principal</h1></html>') );

app.get('/produtos', (req, resp) => resp.send('<html><h1>Listagem de Produtos</h1></html>') );

app.get('/usuarios', (req, resp) => resp.send('<html><h1>Módulo de Usuários</h1></html>') );
 */


 /* let http = require('http');
 const server = http.createServer(function(req, resp) {

    if (req.url == '/produtos') {
       resp.end('<html><h1>Listagem de Produtos</h1></html>');

    }  else if (req.url == '/usuarios') {
        resp.end('<html><h1>Módulo de Usuários</h1></html>');
    
    } else {
        resp.end('<html><h1>Página Principal</h1></html>');
    }  
});

server.listen(3000); 

 */