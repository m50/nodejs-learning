const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const component = require('../components/urlshortener.js');
var upload = multer();
var router = express.Router();


router.get('/', (req, res) => {
   res.render('urlshortener');
});

router.get('/:key', (req, res) => {
	res.redirect(component.getURI(req.params.key));
});

// for parsing routerlication/json
router.use(bodyParser.json()); 

// for parsing routerlication/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
router.use(upload.array());

router.post('/', (req, res) => {
   res.send("Your URI: http://learning.clardy.eu/uri/"+component.createShortener(req.body.url));
});

module.exports = router;