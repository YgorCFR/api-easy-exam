var express = require('express');
var router = express.Router();
var model = require('../models/index');
//const motivo = require('../models/motivo');
var url = require('url');
const sequelize = require('sequelize');


const saveHda = async (hda, res) => {
    await model.hda.create({
        dor_toraxica_tipica: hda.dor_toraxica_tipica,
        assintomatico: hda.assintomatico,
        dor_toraxica_atipica: hda.dor_toraxica_atipica,
        palpitacoes: hda.palpitacoes,
        dispnea_esforcos: hda.dispnea_esforcos,
        sincope: hda.sincope,
        dispneia_repouso: hda.dispneia_repouso,
        cansaco: hda.cansaco
    })
    .catch(error => { res.status(424).json({
        message: "Erro ao inserir hda",
        error: error
    })
        return hda;
    })
    .then(hda => { 
        res = hda;
    });

    return res;
    
};

const saveMotivos = async (motivo, res) => {
    await model.motivo.create({
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
    .catch(error =>{ res.status(424).json({
        message: "Error ao inserir motivo",
        error: error
    })
        return motivo
    })
    .then(motivo => {
        res = motivo;
    })
    
    return res; 
};


const saveDacPrevia = async (dac_previa, res) => {
    await model.dac_previa.create({
        iam : dac_previa.iam,
        crvm : dac_previa.crvm,
        ptca: dac_previa.ptca,
        cat_alterado: dac_previa.cat_alterado
    })
    .catch(error => res.status(424).json({
        message: "Error ao inserir dac_previa",
        error: error
    }))
    .then(dac_previa =>  {
        res = dac_previa;
    })

    return res;
}

const saveFatoresRisco = async (fatores_risco, res) => {
    await model.fatores_risco.create({
            has: fatores_risco.has,
            dm: fatores_risco.dm,
            tabagismo: fatores_risco.tabagismo,
            ex_tabagismo: fatores_risco.ex_tabagismo,
            obesidade: fatores_risco.obesidade,
            dislipdemia: fatores_risco.dislipdemia,
            hf: fatores_risco.hf,
            menopausa: fatores_risco.menopausa
    })
    .catch(error => res.status(424).json({
        message: "Error ao inserir fatores_risco",
        error : error
    }))
    .then(fatores_risco => {
            res = fatores_risco;   
    })

    return res;
}

const saveComorbidades = async (comorbidades, res) => {
    await model.comorbidades.create({
        avc : comorbidades.avc,
        irc : comorbidades.irc,
        aao : comorbidades.aao,
        dca_vasc : comorbidades.dca_vasc
    })
    .catch(error => res.status(424).json({
        message: "Error ao inserir comorbidades",
        error: error
    }))
    .then(comorbidades => {
        res = comorbidades
    })

    return res;
}


const saveHpp = async (hpp, res, dac_previa, fatores_risco, comorbidades) => {
    await model.hpp.create({
        fatores_risco: fatores_risco.id,
        dac_previa: dac_previa.id,
        comorbidades: comorbidades.id
    })
    .catch(error => res.status(424).json({
        message: "Error ao inserir em hpp",
        error: error
    }))
    .then(hpp => {
        res = hpp;
    })

    return res;
}

const saveExamesPrevios = async(exames_previos, res, cat, te, cm, eco) => {
    await model.exames_previos.create({
        cat: cat.id,
        te: te.id,
        cm: cm.id,
        eco: eco.id
    })
    .catch(error => res.status(424).json({
        message: "Error ao inserir em exames previos",
        error: error
    }))
    .then(exames_previos => {
        res = exames_previos;      
    })
    return res;
}

const saveMedicamentos = async(medicamentos, res) => {
    await model.medicamentos.create({
        bloq_calcio: medicamentos.bloq_calcio,
        nitrato: medicamentos.nitrato,
        estatina: medicamentos.estatina,
        bra: medicamentos.bra,
        ieca: medicamentos.ieca,
        clopido_rel: medicamentos.clopido_rel,
        aas: medicamentos.aas,
        b_bloqueador : medicamentos.b_bloqueador,
        diuretico: medicamentos.diuretico,
        outros: medicamentos.outros
    })
    .catch(error => res.status(424).json({
        message: "Error ao inserir em medicamentos",
        error: error
    }))
    .then(medicamentos => {
       res = medicamentos;
    })

    return res;
}

const saveExames = async(exame, paciente, hda, motivos, exames_previos, hpp,dac_previa, fatores_risco, comorbidades, medicamentos, status, data_criacao, data_alteracao, res) => {
    await exame.create({
        paciente: paciente.id,
        hda: hda.id,
        motivo: motivos.id,
        hpp: hpp.id,
        exames_previos: exames_previos.id,
        medicamentos : medicamentos.id,
        status: status,
        data_criacao: data_criacao,
        data_alteracao: data_alteracao  
    })
    .then(exames => res.status(201).json({
        message: "Exame criado com sucesso!",
        data: {motivos, hda, hpp, detalhes_hpp : {dac_previa, fatores_risco, comorbidades}, exames_previos, medicamentos}
    }))
    .catch(error => res.status(424).json({
        message: "Erro ao inserir exame",
        error: error
    }))
}

/*POST criando exame */
/*Considerando nessa sprint apenas de hda até medicamentos*/
router.post('/', async function (req, res, next){
        
        const {paciente, motivo, hda, exames_previos,hpp,medicamentos,status, data_criacao, data_alteracao} = req.body;
        let stepHda = await saveHda(hda, res);
        let stepMotivos = await saveMotivos(motivo, res);
        let stepDacPrevia = await saveDacPrevia(hpp.dac_previa, res);
        let stepFatoresRisco = await saveFatoresRisco(hpp.fatores_risco, res);
        let stepComorbidades = await saveComorbidades(hpp.comorbidades, res);
        let stepHpp = await saveHpp(hpp, res,stepDacPrevia, stepFatoresRisco, stepComorbidades);
        let stepExamesPrevios = await saveExamesPrevios(exames_previos, res, exames_previos.cat, 
            exames_previos.te, exames_previos.cm, exames_previos.eco);
        let stepMedicamentos = await saveMedicamentos(medicamentos, res);
        let stepExames = await saveExames(model.exames,paciente, stepHda, stepMotivos, stepExamesPrevios, stepHpp, stepExamesPrevios,
            stepFatoresRisco, stepComorbidades, stepMedicamentos, status, data_criacao, data_alteracao, res);
  });
//GET listando exame por id
router.get('/id/:id', function(req, res, next) {
    const id_exame = req.params.id; 
    model.exames.findOne({
        include: getExameData(),
        where: {
            id: id_exame
        }
    })
    .then(exame => res.status(200).json({
        data: mapExame(exame)
    }))
    .catch(error => res.json({
      data: [],
      error: error
    }))
});

//GET listando todos os exames
router.get('/', function(req, res, next) {
    const id_exame = req.params.id; 
    model.exames.findAll({
        include: getExameData()
    })
    .then(exame => res.status(200).json({
        data: exame
    }))
    .catch(error => res.json({
        data: [],
        error: error
    }))
});

function mapExame(e){
    return {
        id: e.id,
        status: e.status,
        data_criacao: e.data_criacao,
        data_alteracao: e.data_alteracao,
        paciente: e.exame_paciente,
        motivo: e.exame_motivo,
        hda: e.exame_hda,
        exames_previos: mapExamesPrevios(e.exames_previos_exames),
        hpp : mapHpp(e.exame_hpp),
        medicamentos: e.exame_medicamentos,
        administracao_radiofarmaco: e.exame_administracao_radiofarmaco,
        realizacao_exame: e.exame_realizacao_exame
    }
}

function mapExamesPrevios(ep){
    return{
        id: ep.id,
        cat: ep.cat_exames_previos,
        te: ep.te_exames_previos,
        cm: ep.cm_exames_previos,
        eco: ep.eco_exames_previos
    }
}

function mapHpp(hpp){
    return{
        id: hpp.id,
        fatores_risco: hpp.hpp_fatores_risco,
        dac_previa: hpp.hpp_dac_previa,
        comorbidades: hpp.hpp_comorbidades
    }
}

function getExameData(){
    return [
        {
            model: model.paciente,
            as: 'exame_paciente',
            required: true
        },
        {
            model: model.motivo,
            as: 'exame_motivo',
            required: true
        },
        {
            model: model.hda,
            as: 'exame_hda',
            required: true
        },
        {
            model: model.exames_previos,
            as: 'exames_previos_exames',
            include: [{
                    model: model.cat,
                    as: 'cat_exames_previos'
                },{
                    model: model.te,
                    as: 'te_exames_previos'
                },{
                    model: model.cm,
                    as: 'cm_exames_previos'
                },{
                    model: model.eco,
                    as: 'eco_exames_previos'
                }
            ]
        },{
            model: model.hpp,
            as: 'exame_hpp',
            include: [{
                    model: model.fatores_risco,
                    as: 'hpp_fatores_risco'
                },{
                    model: model.dac_previa,
                    as: 'hpp_dac_previa'
                },{
                    model: model.comorbidades,
                    as: 'hpp_comorbidades'
                }
            ]
        },{
            model: model.medicamentos,
            as: 'exame_medicamentos',
        },
        { 
            model: model.administracao_radiofarmaco,
            as: 'exame_administracao_radiofarmaco'
        },
        {
            model: model.realizacao_exame,
            as: 'exame_realizacao_exame'
        }
    ]
}

const saveAdmRadio = async(administracao_radiofarmaco, res) => {
    await model.administracao_radiofarmaco.create({
        hora: administracao_radiofarmaco.hora,
        dose: administracao_radiofarmaco.dose,
        material_lote: administracao_radiofarmaco.material_lote,
        via_adm: administracao_radiofarmaco.via_adm,
        protocolo_imagem: administracao_radiofarmaco.protocolo_imagem,
        protocolo_estresse: administracao_radiofarmaco.protocolo_estresse,
        prescricao: administracao_radiofarmaco.prescricao
    })
    // .then(administracao_radiofarmaco => res.status(201).json({
    //     message: "Sucesso ao registrar administracao_radiofarmaco",
    //     data: {administracao_radiofarmaco}
    // }))
    .catch(error => res.status(424).json({
        message: "Error ao inserir em administracao_radiofarmaco",
        error: error
    }))
    .then(administracao_radiofarmaco => {
       res = administracao_radiofarmaco;
    })

    return res;
}

const saveRealizacaoExame = async(realizacao_exame, res) => {
    await model.realizacao_exame.create({
        hora: realizacao_exame.hora,
        obs_1: realizacao_exame.obs_1,
        protocolo_captacao: realizacao_exame.protocolo_captacao,
        justificativa: realizacao_exame.justificativa,
        contencao: realizacao_exame.contencao,
        movimentos_captacao: realizacao_exame.movimentos_captacao,
        extravasamento_sitio_puncao: realizacao_exame.extravasamento_sitio_puncao,
        obs_2: realizacao_exame.obs_2
    })
    // .then(realizacao_exame => res.status(201).json({
    //     message: "Sucesso ao registrar realizacao_exame",
    //     data: {realizacao_exame}
    // }))
    .catch(error => res.status(424).json({
        message: "Error ao inserir em realizacao_exame",
        error: error
    }))
    .then(realizacao_exame => {
       res = realizacao_exame;
    })

    return res;
}

const updateExames = async (admRadioFarmaco, realizacaoExame, status, data_alteracao, res, id) => {
    await model.exames.update({
        realizacao_exame: admRadioFarmaco.id,
        administracao_radiofarmaco: realizacaoExame.id,
        status: status,
        data_alteracao: data_alteracao
    },{ 
      where: {
        id : id
      }
    })
    .then(exames => res.status(200).json({
      message: `exame foi atualizado, com status ${status}`,
      data: {admRadioFarmaco , realizacaoExame, status, data_alteracao, id}
    })) 
    .catch(error => res.status(400).json({
      error:error,
      message: "Erro ao atualizar exame"
    }))
} 


/*PUT atualizando exame*/
router.put('/:id_exame', async function (req, res, next) {
    const id_exame = req.params.id_exame;
    const { realizacao_exame ,administracao_radiofarmaco ,status, data_alteracao } = req.body;
    console.log(req.body);
    let stepAdministracaoRadioFarmaco = await saveAdmRadio(administracao_radiofarmaco, res);
    let stepRealizacaoExame = await saveRealizacaoExame(realizacao_exame, res);
    let stepExame = await updateExames(stepAdministracaoRadioFarmaco, stepRealizacaoExame, status,
        data_alteracao, res, id_exame);
    
});


module.exports = router;