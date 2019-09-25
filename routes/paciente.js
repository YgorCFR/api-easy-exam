var express = require('express');
var router = express.Router();
var model = require('../models/index');
const Sequelize = require('sequelize');
var url = require('url');

/* GET buscando todos os pacientes */
router.get('/', function(req, res, next) {
  model.paciente.findAll({})
    .then(paciente => res.json({
      data: paciente
    }))
    .catch(error => res.json({
      data:[],
      error: error
    }));
});

/*GET buscando paciente por nome */
router.get('/:nome', function(req, res, next) {
  const op = Sequelize.Op;
  const nome = req.params.nome;
  model.paciente.findAll({
    where: {
      nome: {
        [op.like]: `%${nome}%`
      }
    }
  })
  .then(paciente => res.status(200).json({
    message: `Retornando paciente com nome ${nome}`,
    data: paciente
  }))
  .catch(error => res.json({
    error:error,
    data:[]
  }));
});

/*GET buscando paciente por id */
router.get('/id/:id_paciente', function(req, res, next) {
  const id_paciente = req.params.id_paciente; 
  model.paciente.findAll({
        where : {
          id_paciente : id_paciente
        }
  })
  .then(paciente => res.status(200).json({
    data: paciente,
    message: `Retornando paciente com id ${id_paciente}`
  }))
  .catch(error => res.json({
    data: [],
    error: error
  }))
});

/*POST criando paciente */
router.post('/', function (req, res, next){
  const {
    cpf, nome, email, data_nascimento, peso, altura, sexo } = req.body;
    if(!cpf.trim()){
      res.status(412).send({ message: 'O CPF não pode ser vazio' });
      return;
    }
    if(!nome.trim()){
      res.status(412).send({ message: 'O nome não pode ser vazio' });
      return;
    }
    model.paciente.create({
        cpf: cpf,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        peso: peso,
        altura: altura,
        sexo: sexo
      })
      .then(paciente => res.status(201).json({
        data: paciente,
        message: 'Um novo paciente foi criado.'
      }))
      .catch(error => res.json({
        data: [],
        error: error
      }));
});

/*PUT atualizando paciente*/
router.put('/:id_paciente', function (req, res, next) {
  const id_paciente = req.params.id_paciente;
  const { cpf, nome, email, data_nascimento, peso, altura, sexo } = req.body;
  //validacao
  if(!cpf.trim()){
    res.status(412).send({ message: 'O CPF não pode ser vazio' });
    return;
  }
  if(!nome.trim()){
    res.status(412).send({ message: 'O nome não pode ser vazio' });
    return;
  }
  model.paciente.update({
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
    message: 'paciente foi atualizado.'
  })) 
  .catch(error => res.json({
    error:error
  }));
});

/*DELETE eliminando o usuario selecionado.*/
router.delete('/:id_paciente', function (req, res, next){
    const id_paciente = req.params.id_paciente;
    model.paciente.destroy({
      where : {
        id_paciente: id_paciente
      }
    })
    .then(status => res.status(201).json({
      message: 'paciente foi deletado.'
    }))
    .catch(error => res.json({
      error: error
    }));
})

module.exports = router;
