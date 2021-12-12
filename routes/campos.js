var express = require("express");
var router = express.Router();
var mProd = require("../models/functions.js");

router.get("/", async function (req, res, next) {
    let result = await mProd.getAllCampos();
    res.status(result.status).send(result.result);
  });

  router.get('/:id', async function(req, res, next) {
    let id = req.params.id;
    console.log("Sending campo with id "+id);
    let result = await mProd.getCampoById(id);
    res.status(result.status).send(result.result);
  });

  router.post('/:id/reservas', async function(req, res, next) {
    let campoId = req.body.campoId;
    let PessoaId = req.body.PessoaId
    let semana = req.body.semana;
    console.log("Reserva feita with id "+PessoaId);
    let result = await mProd.reservaPessoa(campoId, PessoaId, semana);
    res.status(result.status).send(result.result);
  });
  
  router.get('/:id/ativ', async function(req, res, next) {
    let id = req.params.id;
    console.log("Sending activities for campo id "+id);
    let result = await mProd.getCampoAtivs(id);
    res.status(result.status).send(result.result);
  });

  module.exports = router;
  