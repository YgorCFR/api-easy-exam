'use strict';
module.exports = (sequelize, DataTypes) => {
  const hda = sequelize.define('hda', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dor_toraxica_tipica: DataTypes.BOOLEAN,
    assintomatico: DataTypes.BOOLEAN,
    dor_toraxica_atipica: DataTypes.BOOLEAN,
    palpitacoes: DataTypes.BOOLEAN,
    dispnea_esforcos: DataTypes.BOOLEAN,
    sincope: DataTypes.BOOLEAN,
    dispneia_repouso: DataTypes.BOOLEAN,
    cansaco: DataTypes.BOOLEAN
  }, {
      timestamps: false,
      freezeTableName: true
  });
  hda.associate = function(models) {
    // associations can be defined here
    hda.hasMany(models.exames, {foreignKey: 'hda', as: 'exame_hda'})
  };
  return hda;
};