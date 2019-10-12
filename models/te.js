'use strict';
module.exports = (sequelize, DataTypes) => {
  const te = sequelize.define('te', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
      //autoIncrement: false
    },
    descricao: DataTypes.STRING
  }, {
    timestamps: false
  });
  te.associate = function(models) {
    // associations can be defined here
    te.hasMany(models.exames_previos, {as: 'exames_previos_te'})
  };
  return te;
};