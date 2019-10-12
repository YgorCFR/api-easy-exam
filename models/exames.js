'use strict';
module.exports = (sequelize, DataTypes) => {
  const exames = sequelize.define('exames', {
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
    status: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    data_alteracao: DataTypes.DATE
  }, {
    timestamps: false
  });
  exames.associate = function(models) {
    // associations can be defined here
    exames.belongsTo(models.paciente, {foreignKey: 'paciente', as: 'exame_paciente'});
    exames.belongsTo(models.hda, {foreignKey: 'hda', as: 'exame_hda'});
    exames.belongsTo(models.motivo, {foreignKey: 'motivo', as: 'exame_motivo'});
    exames.belongsTo(models.hpp, {foreignKey: 'hpp', as: 'exame_hpp'});
    exames.belongsTo(models.exames_previos, {foreignKey:'exames_previos'});
    exames.belongsTo(models.medicamentos, {foreignKey: 'exame_medicamentos'});
    exames.belongsTo(models.administracao_radiofarmaco, {foreignKey: 'administracao_radiofarmaco', as: 'exame_administracao_radiofarmaco'});
    exames.belongsTo(models.realizacao_exame, {foreignKey: 'realizacao_exame', as: 'exame_realizacao_exame'});
  };
  return exames;
};