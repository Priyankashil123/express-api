'use strict';
module.exports = function (app) {
    var student = require('../controllers/studentController');

    app.route('/student')
        .get(student.list_all_student)
        .put(student.save)
        .post(student.update)
        .delete(student.delete);

};
