const { tbc_usuarios } = require('../models');

module.exports = {
    create(req, res){
        return tbc_usuarios
            .create({
                nombre: req.body.nombre,
                email: req.body.email,
                password: req.body.password
            })
            .then(usuario => res.status(201).send(usuario))
            .catch(error => res.status(400).send(error));
    },

    list(_, res){
        return tbc_usuarios.findAll({})
            .then(usuarios => res.status(200).send(usuarios))
            .catch(error => res.status(400).send(error));
    },

    find(req, res){
        return tbc_usuarios.findByPk(req.params.id)
            .then(usuario => {
                if (!usuario) {
                    return res.status(404).send({ message: "Usuario no encontrado" });
                }
                return res.status(200).send(usuario);
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res){
        return tbc_usuarios.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({message: "Usuario eliminado correctamente"}))
        .catch(error => res.status(400).send(error));
    },

    update(req, res){
        return tbc_usuarios.update(
            {
                nombre: req.body.nombre,
                email: req.body.email,
                password: req.body.password
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({message: "Usuario actualizado correctamente"}))
        .catch(error => res.status(400).send(error));
    }
};