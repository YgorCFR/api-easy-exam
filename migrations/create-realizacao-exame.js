'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('realizacao_exame', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.DATE
      },
      obs_1: {
        type: Sequelize.STRING
      },
      protocolo_captacao: {
        type: Sequelize.STRING
      },
      justificativa: {
        type: Sequelize.STRING
      },
      contencao: {
        type: Sequelize.STRING
      },
      movimentos_captacao: {
        type: Sequelize.STRING
      },
      extravasamento_sitio_puncao: {
        type: Sequelize.STRING
      },
      obs_2: {
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
    return queryInterface.dropTable('realizacao_exame');
  }
};