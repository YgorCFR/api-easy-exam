'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hda', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dor_toraxica_tipica: {
        type: Sequelize.INTEGER
      },
      assintomatico: {
        type: Sequelize.INTEGER
      },
      dor_toraxica_atipica: {
        type: Sequelize.INTEGER
      },
      palpitacoes: {
        type: Sequelize.INTEGER
      },
      dispnea_esforcos: {
        type: Sequelize.INTEGER
      },
      sincope: {
        type: Sequelize.INTEGER
      },
      dispnea_repouso: {
        type: Sequelize.INTEGER
      },
      cansaco: {
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
    return queryInterface.dropTable('hda');
  }
};