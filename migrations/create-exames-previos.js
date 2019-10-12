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
      cat: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {  
          model: 'cat',
          key: 'id'
        }
      },
      te: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: 'te',
          key: 'id'
        }
      },
      cm: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model:'cm',
          key: 'id'
        }
      },
      eco: {
        type: Sequelize.INTEGER,
        allowNull: true,
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