'use strict';
module.exports = (sequelize, DataTypes) => {
  const cm = sequelize.define('cm', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: DataTypes.STRING
  }, {});
  cm.associate = function(models) {
    // associations can be defined here
    cm.hasMany(models.exames_previos, {as: 'exames_previos_cm'})
  };
  return cm;
};