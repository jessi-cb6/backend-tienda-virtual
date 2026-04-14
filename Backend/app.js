require('dotenv').config()

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');

const app = express();

// logs
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>
  res.status(200).send({
    message: 'Bienvenido a la API REST de compras jessi',
  })
);


require('./routes/route_categorias')(app);
require('./routes/route_productos')(app);
require('./routes/route_usuarios')(app);
require('./routes/route_carritos')(app);
require('./routes/route_carrito_detalle')(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;