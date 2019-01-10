const http = require('http');

const servidor = http.createServer( function(req, resp) {

    if (req.url == '/') {
        resp.end('<h1>Pagina Principal</h1>' );

    } else if (req.url == '/produtos') {
        resp.end('<h1>Listagem de Produtos</h1>' );
    }
} );

servidor.listen(3000, 'localhost' );