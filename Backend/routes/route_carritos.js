const carritosController = require('../controllers/controller_carritos');
module.exports = (app) => {
    app.get('/api/carritos', carritosController.list);
    app.get('/api/carrito/:id', carritosController.find); 
    app.post('/api/carritos', carritosController.create);
    app.put('/api/carrito/:id', carritosController.update); 
    app.delete('/api/carrito/:id', carritosController.delete);
};
