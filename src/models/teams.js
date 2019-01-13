'use strict';

const Model = require('./model.js');
const schema = require('./team-schema.js');



class Teams extends Model {}
console.log('this got loaded');

module.exports = new Teams(schema);
