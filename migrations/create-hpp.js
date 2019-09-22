'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hpp', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fatores_risco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'fatores_risco',
          key: 'id'
        }
      },
      dac_previa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'dac_previa',
          key: 'id'
        }
      },
      comorbidades: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'comorbidade',
          key: 'id'
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hpp');
  }
};