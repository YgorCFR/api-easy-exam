'use strict';
module.exports = (sequelize, DataTypes) => {
  const administracao_radiofarmaco = sequelize.define('administracao_radiofarmaco', {
    id:{ 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    hora: DataTypes.DATE,
    dose: DataTypes.STRING,
    material_lote: DataTypes.STRING,
    via_adm: DataTypes.STRING,
    protocolo_imagem: DataTypes.STRING,
    protocolo_estresse: DataTypes.STRING,
    prescricao: DataTypes.STRING
  }, {});
  administracao_radiofarmaco.associate = function(models) {
    // associations can be defined here
    administracao_radiofarmaco.hasMany(models.exame, {as: 'exame_administracao_radiofarmaco'})
  };
  return administracao_radiofarmaco;
};