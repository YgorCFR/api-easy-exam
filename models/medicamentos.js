'use strict';
module.exports = (sequelize, DataTypes) => {
  const medicamentos = sequelize.define('medicamentos', {
    id: DataTypes.INTEGER,
    bloq_calcio: DataTypes.STRING,
    nitrato: DataTypes.STRING,
    estatina: DataTypes.STRING,
    bra: DataTypes.STRING,
    ieca: DataTypes.STRING,
    clopido_rel: DataTypes.STRING,
    aas: DataTypes.STRING,
    b_bloqueador: DataTypes.STRING,
    diuretico: DataTypes.STRING,
    outros: DataTypes.STRING
  }, {});
  medicamentos.associate = function(models) {
    // associations can be defined here
    medicamentos.hasMany(models.exame, {as: 'medicamentos_exame'})
  };
  return medicamentos;
};