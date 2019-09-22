var express = require('express');
var router = express.Router();
var model = require('../models/index');
const Sequelize = require('sequelize');
var url = require('url');

/* GET buscando todos os pacientes */
router.get('/', function(req, res, next) {
  model.Paciente.findAll({})
    .then(paciente => res.json({
      error: false,
      data: paciente
    }))
    .catch(error => res.json({
      error:true,
      data:[],
      error: False
    }));
});

/*GET buscando paciente por nome */
router.get('/:nome', function(req, res, next) {
  const op = Sequelize.Op;
  const nome = req.params.nome; 
  model.Paciente.findAll({
    where: { nome: { [op.like]: `%${nome}%` } }
  })
  .then(paciente => res.json({
    error: false,
    data: paciente
  }))
  .catch(error => res.json({
    error:true,
    data:[],
    error: False
  }));
});

/*GET buscando paciente por id */
router.get('/id/:id_paciente', function(req, res, next) {
  const id_paciente = req.params.id_paciente; 
  model.Paciente.findAll({
        where : {
          id_paciente : id_paciente
        }
  })
  .then(paciente => res.json({
    error: false,
    data: paciente,
    message: `Retornando paciente com id ${id_paciente}`
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }))
});

/*POST buscando todos os pacientes*/
router.post('/', function (req, res, next){
  const {
    cpf,
    nome,
    email,
    data_nascimento,
    peso,
    altura,
    sexo
  } = req.body;
    model.Paciente.create({
        cpf: cpf,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        peso: peso,
        altura: altura,
        sexo: sexo
      })
      .then(paciente => res.status(201).json({
        error: false,
        data: paciente,
        message: 'Um novo paciente foi criado.'
      }))
      .catch(error => res.json({
        error: true,
        data: [],
        error: error
      }));
});

/*PUT buscando todos os pacientes*/
router.put('/:id_paciente', function (req, res, next) {
  const id_paciente = req.params.id_paciente;
  const { cpf, nome, email, data_nascimento, peso, altura, sexo } = req.body;
  model.Paciente.update({
    cpf: cpf,
    nome: nome,
    email: email,
    data_nascimento: data_nascimento,
    peso: peso,
    altura: altura,
    sexo: sexo
  },{ 
    where: {
      id_paciente : id_paciente
    }
  })
  .then(paciente => res.status(201).json({
    error: false,
    message: 'Paciente foi atualizado.'
  })) 
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

/*DELETE eliminando o usuario selecionado.*/
router.delete('/:id_paciente', function (req, res, next){
    const id_paciente = req.params.id_paciente;
    model.Paciente.destroy({
      where : {
        id_paciente: id_paciente
      }
    })
    .then(status => res.status(201).json({
      error: false,
      message: 'Paciente foi deletado.'
    }))
    .catch(error => res.json({
      error: true,
      error: error
    }));
})

module.exports = router;
