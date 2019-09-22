'use strict';
module.exports = (sequelize, DataTypes) => {
  const dac_previa = sequelize.define('dac_previa', {
    id: DataTypes.INTEGER,
    iam: DataTypes.INTEGER,
    crvm: DataTypes.INTEGER,
    ptca: DataTypes.INTEGER,
    cat_alterado: DataTypes.INTEGER
  }, {});
  dac_previa.associate = function(models) {
    // associations can be defined here
    dac_previa.hasMany(models.hpp, {as: 'hpps_dac_previa'})
  };
  return dac_previa;
};