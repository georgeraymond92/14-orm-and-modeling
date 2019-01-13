'use strict';

const modelFinder = (req,res, next) => {

  let modelName = req.params.model;

  req.model = require(`../models/${modelName}`);

  next();

}

module.exports = modelFinder;