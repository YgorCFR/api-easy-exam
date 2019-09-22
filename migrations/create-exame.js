'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exame', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pacientes',
          key: 'id_paciente'
        }
      },
      hda: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'hda',
          key: 'id'
        }
      },
      motivo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'motivo',
          key: 'id'
        }
      },
      hpp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'hpp',
          key: 'id'
        }
      },
      exames_previos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'exames_previos',
          key: 'id'
        }
      },
      medicamentos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'medicamento',
          key: 'id'
        }
      },
      administracao_radiofarmaco: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'administracao_radiofarmaco',
          key: 'id'
        }
      },
      realizacao_exame: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: 'realizacao_exame',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.INTEGER
      },
      data_criacao: {
        type: Sequelize.DATE
      },
      data_alteracao: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('exame');
  }
};