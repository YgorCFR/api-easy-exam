'use strict';
module.exports = (sequelize, DataTypes) => {
  const atuacao = sequelize.define('atuacao', {
    id: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {});
  atuacao.associate = function(models) {
    // associations can be defined here
    atuacao.hasMany(models.usuario, {as: 'usuario_atuacao'})
  };
  return atuacao;
};