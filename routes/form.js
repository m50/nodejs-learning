const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer();
var router = express.Router();


router.get('/', function(req, res){
   res.render('form', { pageTitle: 'URL Shortener' });
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
   res.send("recieved your request!");
});

module.exports = router;