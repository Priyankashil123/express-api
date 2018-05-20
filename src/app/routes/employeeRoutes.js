'use strict';
module.exports = function (app) {
    var user = require('../controllers/employeeController');

    app.route('/employee')
        .get(user.list_all_employee)
        .post(user.create);

    app.route('/employee/:employeeId')
        .get(user.read)
        .put(user.update)
        .delete(user.delete);

};
