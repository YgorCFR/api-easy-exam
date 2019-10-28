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
    timestamps: false,
    freezeTableName: true
  });
  hpp.associate = function(models) {
    // associations can be defined here
    hpp.belongsTo(models.fatores_risco, {foreignKey: 'fatores_risco', as: 'hpp_fatores_risco'});
    hpp.belongsTo(models.dac_previa, {foreignKey: 'dac_previa', as: 'hpp_dac_previa'});
    hpp.belongsTo(models.comorbidades, {foreignKey: 'comorbidades', as: 'hpp_comorbidades'});
    hpp.hasMany(models.exames, {foreignKey: 'hpp', as: 'exame_hpp'});
  };
  return hpp;
};