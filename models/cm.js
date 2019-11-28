'use strict';
module.exports = (sequelize, DataTypes) => {
  const cm = sequelize.define('cm', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true
      //autoIncrement: false
    },
    descricao: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
  });
  cm.associate = function(models) {
    // associations can be defined here
    cm.hasMany(models.exames_previos, {foreignKey: 'cm', as: 'exames_previos_cm'})
  };
  return cm;
};