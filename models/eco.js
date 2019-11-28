'use strict';
module.exports = (sequelize, DataTypes) => {
  const eco = sequelize.define('eco', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
      //autoIncrement: false
    },
    descricao: DataTypes.STRING
  }, {
    timestamps : false,
    freezeTableName: true
  });
  eco.associate = function(models) {
    // associations can be defined here
    eco.hasMany(models.exames_previos, {foreignKey: 'eco', as: 'exames_previos_eco'})
  };
  return eco;
};