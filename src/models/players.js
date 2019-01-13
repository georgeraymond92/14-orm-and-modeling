'use strict';

const Model = require('./model.js');
const schema = require('./players-schema.js');

class Players extends Model {}

module.exports = new Players(schema);
