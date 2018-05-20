'use strict';
const employeeRoutes = require('./employeeRoutes');

module.exports = function (app) {
  employeeRoutes(app);
};
