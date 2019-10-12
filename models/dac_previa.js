'use strict';
module.exports = (sequelize, DataTypes) => {
  const dac_previa = sequelize.define('dac_previa', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    iam: DataTypes.BOOLEAN,
    crvm: DataTypes.BOOLEAN,
    ptca: DataTypes.BOOLEAN,
    cat_alterado: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  dac_previa.associate = function(models) {
    // associations can be defined here
    dac_previa.hasMany(models.hpp, {as: 'hpps_dac_previa'})
  };
  return dac_previa;
};