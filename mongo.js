'use strict';

const mongoose          = require('mongoose');
const environment       = require('../environment/environment').environment;
const constants         = require('../app/utils/constants').mongoMessages;

const Questionnaire     = require('../app/models/questionnaire');
const PatientService    = require('../app/models/patientService');

(function(){
    const mongoDB = environment.mongo;
    
    mongoose.Promise = global.Promise; // Get Mongoose to use the global promise library
    mongoose.connect(mongoDB);
    var db = mongoose.connection; //Get the default connection

    db.on('error', console.error.bind(console, 'MongoDB connection error:')); //Bind connection to error event (to get notification of connection errors)

    /******************* display list of collections - start */
    var collections = mongoose.connections[0].collections;
    var collectionNames = [];

    Object.keys(collections).forEach(function (k) {
        collectionNames.push(k);
    });
    console.log(constants.collections);
    console.log(collectionNames);
    /******************* display list of collections - end */
})();
