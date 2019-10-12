'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('motivo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dor_toraxica: {
        type: Sequelize.BOOLEAN
      },
      pos_sca: {
        type: Sequelize.BOOLEAN
      },
      pos_crvm: {
        type: Sequelize.BOOLEAN
      },
      alteracao_exame: {
        type: Sequelize.BOOLEAN
      },
      equiv_anginoso: {
        type: Sequelize.BOOLEAN
      },
      lesao_coronaria: {
        type: Sequelize.BOOLEAN
      },
      arritmia: {
        type: Sequelize.BOOLEAN
      },
      sincope: {
        type: Sequelize.BOOLEAN
      },
      pos_ptca: {
        type: Sequelize.BOOLEAN
      },
      icc: {
        type: Sequelize.BOOLEAN
      },
      risco_cirurgico: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('motivo');
  }
};