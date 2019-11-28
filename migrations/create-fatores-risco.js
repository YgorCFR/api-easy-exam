'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fatores_risco', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      has: {
        type: Sequelize.BOOLEAN
      },
      dm: {
        type: Sequelize.BOOLEAN
      },
      tabagismo: {
        type: Sequelize.BOOLEAN
      },
      ex_tabagismo: {
        type: Sequelize.BOOLEAN
      },
      obesidade: {
        type: Sequelize.BOOLEAN
      },
      dislipdemia: {
        type: Sequelize.BOOLEAN
      },
      hf: {
        type: Sequelize.BOOLEAN
      },
      menopausa: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('fatores_risco');
  }
};