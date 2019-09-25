'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    cm: DataTypes.STRING,
    atuacao: DataTypes.INTEGER
  }, {});
  usuario.associate = function(models) {
    // associations can be defined here
    usuario.belongsTo(models.atuacao, {foreignKey: 'atuacao', as: 'atuacao_usuario'})
  };
  return usuario;
};