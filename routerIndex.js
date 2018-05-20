'use strict';
const questionnaireRoutes = require('./questionnaireRoutes');
const patientServiceRoutes = require('./patientServiceRoutes');

module.exports = function (app) {
  questionnaireRoutes(app);
  patientServiceRoutes(app);
};
