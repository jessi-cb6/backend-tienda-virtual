const { tbc_carritos } = require('../models');

module.exports = {
    create(req, res){
        return tbc_carritos
            .create({
                usuario_id: req.body.usuario_id
            })
            .then(carrito => res.status(201).send(carrito))
            .catch(error => res.status(400).send(error));
    },

    list(_, res){
        return tbc_carritos.findAll({})
            .then(carritos => res.status(200).send(carritos))
            .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return tbc_carritos.findByPk(req.params.id)
            .then(carrito => {
                if (!carrito) {
                    return res.status(404).send({ message: "Carrito no encontrado" });
                }
                return res.status(200).send(carrito);
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return tbc_carritos.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({message: "Carrito eliminado correctamente"}))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return tbc_carritos.update(
            {
                usuario_id: req.body.usuario_id
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({message: "Carrito actualizado correctamente"}))
        .catch(error => res.status(400).send(error));
    }
};