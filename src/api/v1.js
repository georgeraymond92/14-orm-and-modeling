'use strict';

const express = require('express');

const modelFinder = require('../middleware/model-finder');

const router = express.Router();

router.param('model', modelFinder);


// ROUTES

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);


// FUNCTIONS
function handleGetAll(req,res,next) {
  console.log('in the get all');
  console.log(req.params.model);
  // teamsModel.get()
  req.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      res.status(200).json(output);
    })
    .catch( next );
}

function handleGetOne(req,res,next) {
  console.log('something in this one');
  let id = req.params.id;
  req.model.get(id)
    .then( result => res.status(200).json(result[0]) )
    .catch( next );
}

function handlePost(req,res,next) {
  console.log('post');
  console.log(req.body); 
  req.model.post(req.body)
    .then( result => res.status(200).json(result) )
    .catch( next );
}


function handlePut(req,response,next) {
  req.model.put(req.params.id, req.body)
    .then( result => res.status(200).json(result) )
    .catch( next );
}

function handleDelete(req,res,next) {
  req.model.delete(req.params.id)
    .then( result => res.status(200).json(result) )
    .catch( next );
}

module.exports = router;
