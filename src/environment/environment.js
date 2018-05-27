'use strict';

// environmnet configuration are added here, below environment function is creaded in modular pattern format
exports.environment = (function () {

  const mongo = {
    "dbName": "ommsdb",
    "userName": "mongouser",
    "password": "mongouser123",
  };

  const mongoConnection = "mongodb://" + mongo.userName + ":" + mongo.password + "@localhost:27017/" + mongo.dbName;

  const app = {
    "port": "8081",
    "secretKey": "omms-express"
  };

  return {
    mongo: mongoConnection,
    app: app
  };

})();
