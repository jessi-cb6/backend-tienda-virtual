'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbd_carrito_detalles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_carrito: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'tbb_carritos',
          key:'id'
        }

      },
      precio_uniario: {
        type: Sequelize.DOUBLE
      },
     cantidad: {
  type: Sequelize.INTEGER 
},
      id_producto: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:'tbc_productos',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbd_carrito_detalles');
  }
};