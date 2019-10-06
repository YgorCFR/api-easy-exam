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
        type: Sequelize.INTEGER
      },
      pos_sca: {
        type: Sequelize.INTEGER
      },
      pos_crvm: {
        type: Sequelize.INTEGER
      },
      alteracao_exame: {
        type: Sequelize.INTEGER
      },
      equiv_anginoso: {
        type: Sequelize.INTEGER
      },
      lesao_coronaria: {
        type: Sequelize.INTEGER
      },
      arritmia: {
        type: Sequelize.INTEGER
      },
      sincope: {
        type: Sequelize.INTEGER
      },
      pos_ptca: {
        type: Sequelize.INTEGER
      },
      icc: {
        type: Sequelize.INTEGER
      },
      risco_cirurgico: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('motivo');
  }
};