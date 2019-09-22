'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exames_previos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      cat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {  
          model: 'cat',
          key: 'id'
        }
      },
      te: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'te',
          key: 'id'
        }
      },
      cm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'cm',
          key: 'id'
        }
      },
      eco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'eco',
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
    return queryInterface.dropTable('exames_previo');
  }
};