'use strict';
module.exports = (sequelize, DataTypes) => {
  const comorbidades = sequelize.define('comorbidades', {
    id: DataTypes.INTEGER,
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