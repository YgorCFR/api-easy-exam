'use strict';
module.exports = (sequelize, DataTypes) => {
  const exames_previos = sequelize.define('exames_previos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cat: DataTypes.INTEGER,
    te: DataTypes.INTEGER,
    cm: DataTypes.INTEGER,
    eco: DataTypes.INTEGER
  }, {});
  exames_previos.associate = function(models) {
    // associations can be defined here
    exames_previos.belongsTo(models.cat, {foreignKey: 'cat_exames_previos'});
    exames_previos.belongsTo(models.te, {foreignKey: 'te_exames_previos'});
    exames_previos.belongsTo(models.cm, {foreignKey: 'cm_exames_previos'});
    exames_previos.belongsTo(models.eco, {foreignKey: 'eco_exames_previos'});
    exames_previos.hasMany(models.exame, {as: 'exames_previos_exame'})
  };
  return exames_previos;
};