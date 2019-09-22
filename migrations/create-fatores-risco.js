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
        type: Sequelize.INTEGER
      },
      dm: {
        type: Sequelize.INTEGER
      },
      tabagismo: {
        type: Sequelize.INTEGER
      },
      ex_tabagismo: {
        type: Sequelize.INTEGER
      },
      obesidade: {
        type: Sequelize.INTEGER
      },
      dislipdemia: {
        type: Sequelize.INTEGER
      },
      hf: {
        type: Sequelize.INTEGER
      },
      menopausa: {
        type: Sequelize.INTEGER
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