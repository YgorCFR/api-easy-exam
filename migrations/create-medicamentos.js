'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('medicamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bloq_calcio: {
        type: Sequelize.STRING
      },
      nitrato: {
        type: Sequelize.STRING
      },
      estatina: {
        type: Sequelize.STRING
      },
      bra: {
        type: Sequelize.STRING
      },
      ieca: {
        type: Sequelize.STRING
      },
      clopido_rel: {
        type: Sequelize.STRING
      },
      aas: {
        type: Sequelize.STRING
      },
      b_bloqueador: {
        type: Sequelize.STRING
      },
      diuretico: {
        type: Sequelize.STRING
      },
      outros: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('medicamentos');
  }
};