const express = require('express');
const path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

var rootjs = require('./routes/root.js');
var testjs = require('./routes/test.js');
var formjs = require('./routes/form.js');

app.use('/', rootjs);
app.use('/test', testjs);
app.use('/form', formjs);

app.listen(6080, '127.0.0.1');