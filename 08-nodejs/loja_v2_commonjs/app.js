
/* const express = require('express');
const app = express();
app.set('view engine', 'ejs'); */

const app = require('./config/express')();

app.get('/', (req, resp) => resp.render('index') );

app.get('/produtos', (req, resp) => resp.render('produtos/listagem') );

app.listen(3000, function() {
    console.log('Servidor executando com express e nodemon !! ...');
});





