'use strict';

const bodyParser    = require('body-parser');
const express       = require('express');
const app           = express();
const cors          = require('cors');

const environment   = require('../environment/environment').environment;
const routes        = require('../app/routes');
const port          = environment.app.port;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
routes(app);

app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});

app.listen(port, () => {
    console.log('OMMS-Express running in ' + port);
});
