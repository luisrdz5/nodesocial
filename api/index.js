const express = require('express');
const app = express();

const config =require('../config.js');
const user = require('./components/user/network');

//Router
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('API listening in port  ', config.api.port);
})