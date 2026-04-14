const { tbc_categorias } = require('../models'); 

module.exports = {
    create(req, res){
        return tbc_categorias
            .create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion 
            })
            .then(categoria => res.status(201).send(categoria)) 
            .catch(error => res.status(400).send(error));
    },
    
    list(_, res){
        return tbc_categorias.findAll({})
            .then(categorias => res.status(200).send(categorias))
            .catch(error => res.status(400).send(error));
    },
    
    find(req, res){
        // Cambiado a findByPk y usando req.params.id
        return tbc_categorias.findByPk(req.params.id)
            .then(categoria => {
                if (!categoria) {
                    return res.status(404).send({ message: "Categoría no encontrada" });
                }
                return res.status(200).send(categoria);
            })
            .catch(error => res.status(400).send(error));
    },
    
    delete(req, res){
        return tbc_categorias.destroy({
            where: { id: req.params.id }
        })
        .then(() => res.status(200).send({message: "Categoría eliminada correctamente"}))
        .catch(error => res.status(400).send(error));
    },
    
    update(req, res){
        return tbc_categorias.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion // Añadido descripción
            },
            {
                where: { id: req.params.id }
            }
        )
        .then(() => res.status(200).send({message: "Categoría actualizada correctamente"}))
        .catch(error => res.status(400).send(error));
    }
};