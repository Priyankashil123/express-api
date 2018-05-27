'use strict';
module.exports = function (app) {
    var user = require('../controllers/userController');

    app.route('/user')
        .get(user.list_all_user);

};
