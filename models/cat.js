'use strict';
module.exports = (sequelize, DataTypes) => {
  const cat = sequelize.define('cat', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: DataTypes.STRING
  }, {});
  cat.associate = function(models) {
    // associations can be defined here
    cat.hasMany(models.exames_previos, {as: 'exames_previos_cat'})
  };
  return cat;
};