'use strict';
//const employeeRoutes = require('./employeeRoutes');
const userRoutes = require('./userRoutes');
const courseCubeRoutes = require('./courseCubeRoutes');

module.exports = function (app) {
  //employeeRoutes(app);
  userRoutes(app);
  courseCubeRoutes(app);
};
