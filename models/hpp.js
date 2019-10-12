'use strict';
module.exports = (sequelize, DataTypes) => {
  const hpp = sequelize.define('hpp', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fatores_risco: DataTypes.INTEGER,
    dac_previa: DataTypes.INTEGER,
    comorbidades: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  hpp.associate = function(models) {
    // associations can be defined here
    hpp.belongsTo(models.fatores_risco, {foreignKey: 'fatores_risco', as: 'fatores_risco_hpp'});
    hpp.belongsTo(models.dac_previa, {foreignKey: 'dac_previa', as: 'dac_previa_hpp'});
    hpp.belongsTo(models.comorbidades, {foreignKey: 'comorbidades', as: 'comorbidades_hpp'});
    hpp.hasMany(models.exames, {as: 'hpp_exame'});
  };
  return hpp;
};