'use strict';
var mongoose = require('mongoose');
const constant   = require('../utils/constants').collection;
var Schema = mongoose.Schema;

var QuestionnaireSchema = new Schema({
  id: String,
  questions: [],
  version: {
    type: String,
    default: '0'
  }
}, {
  collection: constant.questionnaire,
  minimize: false
});


QuestionnaireSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Questionnaire', QuestionnaireSchema);
