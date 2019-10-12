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
        type: Sequelize.BOOLEAN
      },
      assintomatico: {
        type: Sequelize.BOOLEAN
      },
      dor_toraxica_atipica: {
        type: Sequelize.BOOLEAN
      },
      palpitacoes: {
        type: Sequelize.BOOLEAN
      },
      dispnea_esforcos: {
        type: Sequelize.BOOLEAN
      },
      sincope: {
        type: Sequelize.BOOLEAN
      },
      dispneia_repouso: {
        type: Sequelize.BOOLEAN
      },
      cansaco: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hda');
  }
};