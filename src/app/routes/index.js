'use strict';
//const employeeRoutes = require('./employeeRoutes');
const userRoutes = require('./userRoutes');

module.exports = function (app) {
  //employeeRoutes(app);
  userRoutes(app);
};
