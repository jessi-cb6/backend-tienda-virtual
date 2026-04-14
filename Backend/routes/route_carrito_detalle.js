const detalleController = require('../controllers/controller_carrito_detalle');

module.exports = (app) => {
    app.get('/api/detalles', detalleController.list);
    app.get('/api/detalle/:id', detalleController.find);
    app.post('/api/detalles', detalleController.create);
    app.put('/api/detalle/:id', detalleController.update);
    app.delete('/api/detalle/:id', detalleController.delete); 
};
