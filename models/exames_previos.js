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
  }, {
    timestamps: false
  });
  exames_previos.associate = function(models) {
    // associations can be defined here
    exames_previos.belongsTo(models.cat, {foreignKey: 'cat', as: 'cat_exames_previos'});
    exames_previos.belongsTo(models.te, {foreignKey: 'te', as: 'te_exames_previos'});
    exames_previos.belongsTo(models.cm, {foreignKey: 'cm', as: 'cm_exames_previos'});
    exames_previos.belongsTo(models.eco, {foreignKey: 'eco', as: 'eco_exames_previos'});
    exames_previos.hasMany(models.exames, {foreignKey:'exames_previos' ,as: 'exames_previos_exames'})
  };
  return exames_previos;
};