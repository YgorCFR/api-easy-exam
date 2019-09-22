'use strict';
module.exports = (sequelize, DataTypes) => {
  const motivo = sequelize.define('motivo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dor_toraxica: DataTypes.INTEGER,
    pos_sca: DataTypes.INTEGER,
    pos_crvm: DataTypes.INTEGER,
    alteracao_exame: DataTypes.INTEGER,
    equiv_anginoso: DataTypes.INTEGER,
    lesao_coronaria: DataTypes.INTEGER,
    arritmia: DataTypes.INTEGER,
    sincope: DataTypes.INTEGER,
    pos_ptca: DataTypes.INTEGER,
    icc: DataTypes.INTEGER,
    risco_cirurgico: DataTypes.INTEGER
  }, {});
  motivo.associate = function(models) {
    // associations can be defined here
    motivo.hasMany(models.exame, {as: 'motivo_exame'})
  };
  return motivo;
};