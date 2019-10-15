'use strict';
module.exports = (sequelize, DataTypes) => {
  const motivo = sequelize.define('motivo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dor_toraxica: DataTypes.BOOLEAN,
    pos_sca: DataTypes.BOOLEAN,
    pos_crvm: DataTypes.BOOLEAN,
    alteracao_exame: DataTypes.BOOLEAN,
    equiv_anginoso: DataTypes.BOOLEAN,
    lesao_coronaria: DataTypes.BOOLEAN,
    arritmia: DataTypes.BOOLEAN,
    sincope: DataTypes.BOOLEAN,
    pos_ptca: DataTypes.BOOLEAN,
    icc: DataTypes.BOOLEAN,
    risco_cirurgico: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  motivo.associate = function(models) {
    // associations can be defined here
    motivo.hasMany(models.exames, {foreignKey:'motivo', as: 'motivo_exame'})
  };
  return motivo;
};