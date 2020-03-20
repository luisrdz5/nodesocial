const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./components/user/swagger.json');

const config =require('../config.js');
const user = require('./components/user/network');



app.use(bodyParser.json());
//Router
app.use('/api/user', user);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.listen(config.api.port, () => {
    console.log('API listening in port  ', config.api.port);
})