'use strict';

let express = require('express');
let app = express();

app.use(express.static('public'));

const appRoutes = require('./routes/app_routes');
app.use('/babies', appRoutes);

module.exports = app;