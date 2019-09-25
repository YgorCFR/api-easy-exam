'use strict';
module.exports = (sequelize, DataTypes) => {
  const paciente = sequelize.define('paciente', {
    id_paciente:{ 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cpf: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    peso: DataTypes.DECIMAL,
    altura: DataTypes.DECIMAL,
    sexo: DataTypes.STRING
  }, {
    timestamps: false
  });
  paciente.associate = function(models) {
    // associations can be defined here
    paciente.hasMany(models.exame, {as: 'paciente_exame'})
  };
  return paciente;
};