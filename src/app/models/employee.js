'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  id: String,
  questions: [],
  version: {
    type: String,
    default: '0'
  }
}, {
  collection: 'employee',
  minimize: false
});

module.exports = mongoose.model('Employee', EmployeeSchema);
