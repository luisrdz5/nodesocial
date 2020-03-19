const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config =require('../config.js');
const user = require('./components/user/network');


app.use(bodyParser.json());
//Router
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('API listening in port  ', config.api.port);
})