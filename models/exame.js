'use strict';
module.exports = (sequelize, DataTypes) => {
  const exame = sequelize.define('exame', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paciente: DataTypes.INTEGER,
    hda: DataTypes.INTEGER,
    motivo: DataTypes.INTEGER,
    hpp: DataTypes.INTEGER,
    exames_previos: DataTypes.INTEGER,
    medicamentos: DataTypes.INTEGER,
    administracao_radiofarmaco: DataTypes.INTEGER,
    realizacao_exame: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    data_criacao: DataTypes.DATE,
    data_alteracao: DataTypes.DATE
  }, {});
  exame.associate = function(models) {
    // associations can be defined here
    exame.belongsTo(models.Paciente, {foreignKey: 'paciente', as: 'exame_paciente'});
    exame.belongsTo(models.hda, {foreignKey: 'hda', as: 'exame_hda'});
    exame.belongsTo(models.motivo, {foreignKey: 'motivo', as: 'exame_motivo'});
    exame.belongsTo(models.hpp, {foreignKey: 'hpp', as: 'exame_hpp'});
    exame.belongsTo(models.exames_previos, {foreignKey:'exames_previos'});
    exame.belongsTo(models.medicamentos, {foreignKey: 'exame_medicamentos'});
    exame.belongsTo(models.administracao_radiofarmaco, {foreignKey: 'administracao_radiofarmaco', as: 'exame_administracao_radiofarmaco'});
    exame.belongsTo(models.realizacao_exame, {foreignKey: 'realizacao_exame', as: 'exame_realizacao_exame'});  };
  return exame;
};