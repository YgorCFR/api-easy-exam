'use strict';
module.exports = (sequelize, DataTypes) => {
  const fatores_risco = sequelize.define('fatores_risco', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    has: DataTypes.INTEGER,
    dm: DataTypes.INTEGER,
    tabagismo: DataTypes.INTEGER,
    ex_tabagismo: DataTypes.INTEGER,
    obesidade: DataTypes.INTEGER,
    dislipdemia: DataTypes.INTEGER,
    hf: DataTypes.INTEGER,
    menopausa: DataTypes.INTEGER
  }, {});
  fatores_risco.associate = function(models) {
    // associations can be defined here
    fatores_risco.hasMany(models.hpp, {as: 'hpps_fatores_risco'})
  };
  return fatores_risco;
};