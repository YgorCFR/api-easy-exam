'use strict';
module.exports = (sequelize, DataTypes) => {
  const medicamentos = sequelize.define('medicamentos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
  }, {
    timestamps: false
  });
  medicamentos.associate = function(models) {
    // associations can be defined here
    medicamentos.hasMany(models.exames, {as: 'medicamentos_exame'})
  };
  return medicamentos;
};