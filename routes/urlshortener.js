const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const component = require('../components/urlshortener.js');
const path = require('path');
var upload = multer();
var router = express.Router();

apiNoURL = (res) => {
	res.status(404);
	res.json({ status: 'Failure', message: 'No URL provided' });
};

router.get('/', (req, res) => {
   res.render('urlshortener', { pageTitle: 'URL Shortener' });
});

router.get('/api', (req, res) => {
	component.getDatabase(() => {
		res.status(404);
		res.json({ status: 'Failure', message: 'Not Found' });
	}, (database) => {
		res.json({keys: database});
	});
	
});

router.get('/api/:key', (req, res) => {
	component.getURI(req.params.key, () => {
		res.status(404);
		res.json({ status: 'Failure', message: 'Not Found' });
	}, (key, uri) => {
		res.json({ key: key, url: uri });
	});
});

router.get('/:key', (req, res) => {
	component.redirectURI(req.params.key, res);
});

router.use(bodyParser.json()); 
router.use(bodyParser.urlencoded({ extended: true })); 
router.use(upload.array());

router.post('/', (req, res) => {
	component.createShortener(req.body.url, (key, uri) => {
		res.render('shorturl', { pageTitle: 'URL Shortener', url: uri });
	});
});

router.post('/api', (req, res) => {
	if(!req.body.url) {
		apiNoURL(res);
	}
	component.createShortener(req.body.url, (key, uri) => { res.json({ status: 'Success', message: 'New URL created', location: '/api/'+key, url: uri }); });
});

router.put('/api/:key', (req, res) => {
	if(!req.body.url) {
		apiNoURL(res);
	}
	component.editShortener(req.body.url, req.params.key, (key, uri) => { res.json({ status: 'Success', message: 'New URL created', location: '/api/'+key, url: uri }); }, () => { res.status(404); res.json({ status: 'Failure', message: 'Not Found' }); });
});

router.delete('/api/:key', (req, res) => {
	if(!req.body.url) {
		apiNoURL(res);
	}
	component.deleteShortener(req.params.key, () => { res.json({ status: 'Success', message: 'Shortened URL (key: '+req.params.key+') deleted.' }) }, () => { res.status(404); res.json({ status: 'Failure', message: 'Not Found' }); });
});

router.get('*', function(req, res){
	res.status(404);
	res.sendFile(path.resolve('./views/html/404.html'));
});

module.exports = router;