const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const component = require('../components/urlshortener.js');
const path = require('path');
var upload = multer();
var router = express.Router();


router.get('/', (req, res) => {
   res.render('urlshortener', { pageTitle: 'URL Shortener' });
});

router.get('/:key', (req, res) => {
	component.getURI(req.params.key, res);
});

// for parsing routerlication/json
router.use(bodyParser.json()); 

// for parsing routerlication/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
router.use(upload.array());

router.post('/', (req, res) => {
	component.createShortener(req.body.url, res, (uri) => {
		res.render('shorturl', { pageTitle: 'URL Shortener', url: uri });
	});
});

router.get('*', function(req, res){
	res.sendFile(path.resolve('./views/404.html'));
});

module.exports = router;