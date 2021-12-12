var express = require("express");
var router = express.Router();
var mProd = require("../models/functions.js");

router.get("/", async function (req, res, next) {
    let result = await mProd.getAllCentros();
    res.status(result.status).send(result.result);
  });

router.get("/proximos", async function (req, res, next) {
  let lat  = req.query.lat; 
  let long = req.query.long;
  console.log(lat, long)
  let result = await mProd.getAllCentrosProximos(lat, long);
  res.status(result.status).send(result.result);
  });

  module.exports = router;
