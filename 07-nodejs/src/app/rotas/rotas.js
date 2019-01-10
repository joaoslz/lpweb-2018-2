
module.exports = (app) => {
  app.get('/', (req, resp) => resp.send('<h1>Página Principal</h1>') );
  app.get('/produtos', (req, resp) => resp.send('<h1>Listagem de produtos</h1>') );
}