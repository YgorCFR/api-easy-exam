'use strict';
module.exports = (sequelize, DataTypes) => {
  const realizacao_exame = sequelize.define('realizacao_exame', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    hora: DataTypes.DATE,
    obs_1: DataTypes.STRING,
    protocolo_captacao: DataTypes.STRING,
    justificativa: DataTypes.STRING,
    contencao: DataTypes.STRING,
    movimentos_captacao: DataTypes.STRING,
    extravasamento_sitio_puncao: DataTypes.STRING,
    obs_2: DataTypes.STRING
  }, {});
  realizacao_exame.associate = function(models) {
    // associations can be defined here
    realizacao_exame.hasMany(models.exames, {foreignKey:'realizacao_exame', as: 'realizacao_exame_exame'})
  };
  return realizacao_exame;
};