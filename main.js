const express = require('express');
const path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

const rootjs = require('./routes/root.js');
const testjs = require('./routes/test.js');
const cvjs = require('./routes/cv.js');
const formjs = require('./routes/form.js');
const reactjs = require('./routes/react.js');
const urlshortenerjs = require('./routes/urlshortener.js');
const longpage = require('./routes/longpage-test.js');

app.use('/', rootjs);
app.use('/test', testjs);
app.use('/markus', cvjs);
app.use('/form', formjs);
app.use('/react', reactjs);
app.use('/url', urlshortenerjs);
app.use('/lorem', longpage);

app.get('*', function(req, res){
	res.sendFile(path.resolve('./views/404.html'));
});


app.listen(6080, '127.0.0.1', () => {
	console.log('listening on 127.0.0.1:6080');
});