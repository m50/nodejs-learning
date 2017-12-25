const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
var upload = multer();
var router = express.Router();


router.get('/', function(req, res){
   res.render('form', { pageTitle: 'Form Test' });
});

// for parsing routerlication/json
router.use(bodyParser.json()); 

// for parsing routerlication/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
router.use(upload.array());

router.post('/', function(req, res){
   console.log(req.body);
   res.render('generic-accept', { pageTitle: 'Form Test', content: 'Received your request! You said: ' + req.body.say + ' To: ' + req.body.to });
});

router.get('*', function(req, res){
	res.sendFile(path.resolve('./views/html/404.html'));
});

module.exports = router;