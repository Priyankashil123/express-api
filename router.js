'use strict';
module.exports = function (app) {
    var user = require('../controllers/questionnaireController');

    app.route('/questionnaire')
        .get(user.list_all_questionnaire)
        .post(user.create);

    app.route('/questionnaire/:questionnaireId')
        .get(user.read)
        .put(user.update)
        .delete(user.delete);

};
