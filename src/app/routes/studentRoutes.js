'use strict';
module.exports = function (app) {
    var student = require('../controllers/studentController');

    app.route('/student')
        .get(student.list_all_student)
        .post(student.save);

};
