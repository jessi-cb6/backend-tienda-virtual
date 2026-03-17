'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_carritos.init({
    estado: DataTypes.BOOLEAN,
    id_usuario: DataTypes.INTEGER,
    fecha_creacion: DataTypes.DATE,
    total: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'tbb_carritos',
  });
  tbb_carritos.associate=(models)=>{
    tbb_carritos.belongsTo(models.tbc_usuarios,{
      foreignKey:'id_usuario',
      as:'tbc_usuarios'
    })
  }
  return tbb_carritos;
};