const express = require('express');
const path = require('path');
var app = express();
app.use('/views', express.static(path.join(__dirname, 'views')));

var rootjs = require('./routes/root.js');
var testjs = require('./routes/test.js');

app.use('/', rootjs);
app.use('/test', testjs);

app.listen(6080, '127.0.0.1');