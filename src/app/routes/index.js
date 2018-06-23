'use strict';

const courseCubeRoutes = require('./courseCubeRoutes');
const studentRoutes = require('./studentRoutes');

module.exports = function (app) {
  courseCubeRoutes(app);
  studentRoutes(app);
};
