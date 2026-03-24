'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(100),
                allowNull:false

      },
      descripcion: {
        type: Sequelize.STRING(200),
                allowNull:false

      },
      precio: {
        type: Sequelize.FLOAT(10,2),
                allowNull:false

      },
      stock: {
        type: Sequelize.INTEGER
      },
      id_categoria: {
        allowNull:false,
  
        
        type: Sequelize.INTEGER,
        references:{
          model:'tbc_categorias',
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
    await queryInterface.dropTable('tbc_productos');
  }
};