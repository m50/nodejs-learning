const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const component = require('../components/urlshortener.js');
const path = require('path');
var upload = multer();
var router = express.Router();

var callbacks = {};

callbacks.renderShortUrl = (key, uri) => {
	res.render('shorturl', { pageTitle: 'URL Shortener', url: uri });
};

callbacks.apiSuccess = (key, uri) => {
	res.json({ status: 'Success', message: 'New URL created', location: '/api/'+key, url: uri });
};

callbacks.apiNotFound = () => {
	res.status(404);
	res.json({ status: 'Failure', message: 'Not Found' });
};
callbacks.apiNoURL = () => {
	res.status(404);
	res.json({ status: 'Failure', message: 'No URL provided' });
};

router.get('/', (req, res) => {
   res.render('urlshortener', { pageTitle: 'URL Shortener' });
});

router.get('/:key', (req, res) => {
	component.redirectURI(req.params.key, res);
});

router.get('/api', (req, res) => {
	let database = component.getDatabase();
	res.json(database);
});

router.get('/api/:key', (req, res) => {
	let uri = component.getURI(key);
	if(uri) {
		res.json({ url: uri });
	} else {
		callbacks.apiNotFound();
	}
});

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true })); 
router.use(upload.array());

router.post('/', (req, res) => {
	component.createShortener(req.body.url, callbacks.renderShortUrl);
});

router.post('/api', (req, res) => {
	if(!req.body.url) {
		callbacks.apiNoURL();
	}
	component.createShortener(req.body.url, callbacks.apiSuccess);
});

router.put('/api/:key', (req, res) => {
	if(!req.body.url) {
		callbacks.apiNoURL();
	}
	component.editShortener(req.body.url, req.params.key, callbacks.apiSuccess, callbacks.apiNotFound);
});

router.delete('/api/:key', (req, res) => {
	if(!req.body.url) {
		callbacks.apiNoURL();
	}
	component.deleteShortener(req.params.key, () => { res.json({ status: 'Success', message: 'Shortened URL (key: '+req.params.key+') deleted.' }) }, callbacks.apiNotFound);
});

router.get('*', function(req, res){
	res.sendFile(path.resolve('./views/404.html'));
});

module.exports = router;