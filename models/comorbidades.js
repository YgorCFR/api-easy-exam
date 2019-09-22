'use strict';
module.exports = (sequelize, DataTypes) => {
  const comorbidades = sequelize.define('comorbidades', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    avc: DataTypes.INTEGER,
    irc: DataTypes.INTEGER,
    aao: DataTypes.INTEGER,
    dca_vasc: DataTypes.INTEGER
  }, {});
  comorbidades.associate = function(models) {
    // associations can be defined here
    comorbidades.hasMany(models.hpp, {as: 'hpps_comorbidades'})
  };
  return comorbidades;
};