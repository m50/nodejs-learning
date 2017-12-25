const express = require('express');
const path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

const home = require('./routes/home.js');
const test = require('./routes/test.js');
const cv = require('./routes/cv.js');
const form = require('./routes/form.js');
const blog = require('./routes/blog.js');
const urlshortener = require('./routes/urlshortener.js');
const longpage = require('./routes/longpage-test.js');

app.use('/', home);
app.use('/test', test);
app.use('/markus', cv);
app.use('/form', form);
app.use('/blog', blog);
app.use('/url', urlshortener);
app.use('/lorem', longpage);

app.get('*', function(req, res){
	res.sendFile(path.resolve('./views/html/404.html'));
});


app.listen(6080, '127.0.0.1', () => {
	console.log('listening on 127.0.0.1:6080');
});