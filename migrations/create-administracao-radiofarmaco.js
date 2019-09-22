'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('administracao_radiofarmaco', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.DATE
      },
      dose: {
        type: Sequelize.STRING
      },
      material_lote: {
        type: Sequelize.STRING
      },
      via_adm: {
        type: Sequelize.STRING
      },
      protocolo_imagem: {
        type: Sequelize.STRING
      },
      protocolo_estresse: {
        type: Sequelize.STRING
      },
      prescricao: {
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
    return queryInterface.dropTable('administracao_radiofarmaco');
  }
};