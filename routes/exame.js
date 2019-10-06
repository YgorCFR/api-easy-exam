var express = require('express');
var router = express.Router();
var model = require('../models/index');
var url = require('url');

/*POST criando exame */
router.post('/', function (req, res, next){
    const {
     paciente, motivo} = req.body; //, hda, hpp, exames_previos, medicamentos, administracao_radiofarmaco,
    // realizacao_exame, status, data_criacao, data_alteracao } = req.body;
    model.motivo.create({
        dor_toraxica: motivo.dor_toraxica,
        pos_sca: motivo.pos_sca,
        pos_crvm: motivo.pos_crvm,
        alteracao_exame: motivo.alteracao_exame,
        equiv_anginoso: motivo.equiv_anginoso,
        lesao_coronaria: motivo.lesao_coronaria,
        arritmia: motivo.arritmia,
        sincope: motivo.sincope,
        pos_ptca: motivo.pos_ptca,
        icc: motivo.icc,
        risco_cirurgico: motivo.risco_cirurgico
    })
    .then(motivo => model.exame.create({
        paciente: paciente,
        motivo: motivo.id,
    }))
    .catch(error => res.json({
        message: "Erro ao inserir motivo",
        error: error
    }))
    .then(exame => res.status(201).json({
        data: exame,
        message: 'Um novo exame foi criado.'
    }))
    .catch(error => res.json({
        message: "Erro ao criar exame",
        error: error
    }));  
  });

  module.exports = router;