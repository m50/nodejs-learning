const express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('*', (req, res, next) => {
	console.log(req.headers["x-forwarded-proto"]);
	if (req.headers["x-forwarded-proto"] === "https"){
		return next();
	}
    res.redirect('https://' + req.headers.host + req.url);
})

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
	res.sendFile('./views/404.html');
});


app.listen(6080, '127.0.0.1', () => {
	console.log('listening on 127.0.0.1:6080');
});