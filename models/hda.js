'use strict';
module.exports = (sequelize, DataTypes) => {
  const hda = sequelize.define('hda', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dor_toraxica_tipica: DataTypes.INTEGER,
    assintomatico: DataTypes.INTEGER,
    dor_toraxica_atipica: DataTypes.INTEGER,
    palpitacoes: DataTypes.INTEGER,
    dispnea_esforcos: DataTypes.INTEGER,
    sincope: DataTypes.INTEGER,
    dispnea_repouso: DataTypes.INTEGER,
    cansaco: DataTypes.INTEGER
  }, {});
  hda.associate = function(models) {
    // associations can be defined here
    hda.hasMany(models.exame, {as: 'hda_exame'})
  };
  return hda;
};