const express = require('express');
const path = require('path');
var app = express();

// app.use(express.static('views'));
// app.use(express.static('static'));

// app.set('view engine', 'pug');
// app.set('views','./views');
app.set('view engine', 'html');
app.set('views','./views');

var rootjs = require('./routes/root.js');
var testjs = require('./routes/test.js');

app.use('/', rootjs);
app.use('/test', testjs);

app.listen(6080, '127.0.0.1');