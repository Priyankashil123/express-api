'use strict';
module.exports = function (app) {
    var courseCube = require('../controllers/courseCubeController');

    app.route('/coursecube')
        .get(courseCube.list_all_courseCube)
        .post(courseCube.save);

};
