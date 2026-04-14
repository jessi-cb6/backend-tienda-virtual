const { tbc_carrito_detalle } = require('../models');

module.exports = {
    create(req, res){
        return tbc_carrito_detalle
            .create({
                carrito_id: req.body.carrito_id,
                producto_id: req.body.producto_id,
                cantidad: req.body.cantidad
            })
            .then(detalle => res.status(201).send(detalle))
            .catch(error => res.status(400).send(error));
    },

    list(_, res){
        return tbc_carrito_detalle.findAll({})
            .then(detalles => res.status(200).send(detalles))
            .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return tbc_carrito_detalle.findByPk(req.params.id)
            .then(detalle => {
                if (!detalle) {
                    return res.status(404).send({ message: "Detalle no encontrado" });
                }
                return res.status(200).send(detalle);
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return tbc_carrito_detalle.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({message: "Detalle eliminado correctamente"}))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return tbc_carrito_detalle.update(
            {
                carrito_id: req.body.carrito_id,
                producto_id: req.body.producto_id,
                cantidad: req.body.cantidad
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({message: "Detalle actualizado correctamente"}))
        .catch(error => res.status(400).send(error));
    }
};