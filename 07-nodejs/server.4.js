//const app = require('express-customizado');
//const app = express();

const app = require('./src/config/express-customizado');

app.listen(3000, function() {
    console.info('Servidor rodando na porta 3000');
});

app.get('/', (req, resp) => resp.send('<h1>Página Principal</h1>') );
app.get('/produtos', (req, resp) => resp.send('<h1>Listagem de produtos</h1>') );


/* 
const http = require('http');

const servidor = http.createServer( function(req, resp) {

    if (req.url == '/') {
        resp.end('<h1>Pagina Principal</h1>' );

    } else if (req.url == '/produtos') {
        resp.end('<h1>Listagem de Produtos</h1>' );
    }
} );

servidor.listen(3000, 'localhost' ); 
*/