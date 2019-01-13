'use strict';

// const playersModel = require('./players-schema');


class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    console.log('this is in the get');
    let queryObject = _id ? {_id} : {};
    return this.schema.find(queryObject);
  }
  
  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(_id, record) {
    return playersModel.findByIdAndUpdate(_id, record, {new:true});
  }

  delete(_id) {
    return playersModel.findByIdAndDelete(_id);
  }

}

module.exports = Model;
