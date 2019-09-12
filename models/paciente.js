'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
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
  Paciente.associate = function(models) {
    // associations can be defined here
  };
  return Paciente;
};