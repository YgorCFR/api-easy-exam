'use strict';
module.exports = (sequelize, DataTypes) => {
  const comorbidades = sequelize.define('comorbidades', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    avc: DataTypes.BOOLEAN,
    irc: DataTypes.BOOLEAN,
    aao: DataTypes.BOOLEAN,
    dca_vasc: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  comorbidades.associate = function(models) {
    // associations can be defined here
    comorbidades.hasMany(models.hpp, {as: 'hpps_comorbidades'})
  };
  return comorbidades;
};