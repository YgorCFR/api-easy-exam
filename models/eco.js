'use strict';
module.exports = (sequelize, DataTypes) => {
  const eco = sequelize.define('eco', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: DataTypes.STRING
  }, {});
  eco.associate = function(models) {
    // associations can be defined here
    eco.hasMany(models.exames_previos, {as: 'exames_previos_eco'})
  };
  return eco;
};