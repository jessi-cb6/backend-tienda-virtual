const { tbc_productos } = require('../models');

module.exports = {
    create(req, res){
        return tbc_productos
            .create({
                nombre: req.body.nombre,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                categoria_id: req.body.categoria_id
            })
            .then(producto => res.status(201).send(producto))
            .catch(error => res.status(400).send(error));
    },

    list(_, res){
        return tbc_productos.findAll({})
            .then(productos => res.status(200).send(productos))
            .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return tbc_productos.findByPk(req.params.id)
            .then(producto => {
                if (!producto) {
                    return res.status(404).send({ message: "Producto no encontrado" });
                }
                return res.status(200).send(producto);
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return tbc_productos.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({message: "Producto eliminado correctamente"}))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return tbc_productos.update(
            {
                nombre: req.body.nombre,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                categoria_id: req.body.categoria_id
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({message: "Producto actualizado correctamente"}))
        .catch(error => res.status(400).send(error));
    }
};