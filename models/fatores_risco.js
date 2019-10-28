'use strict';
module.exports = (sequelize, DataTypes) => {
  const fatores_risco = sequelize.define('fatores_risco', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    has: DataTypes.BOOLEAN,
    dm: DataTypes.BOOLEAN,
    tabagismo: DataTypes.BOOLEAN,
    ex_tabagismo: DataTypes.BOOLEAN,
    obesidade: DataTypes.BOOLEAN,
    dislipdemia: DataTypes.BOOLEAN,
    hf: DataTypes.BOOLEAN,
    menopausa: DataTypes.BOOLEAN
  }, {
    timestamps: false,
    freezeTableName: true
  });
  fatores_risco.associate = function(models) {
    // associations can be defined here
    fatores_risco.hasMany(models.hpp, {foreignKey: 'dac_previa', as: 'hpp_fatores_risco'})
  };
  return fatores_risco;
};