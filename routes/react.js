const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
var router = express.Router();

router.get('/', function(req, res){
	res.render('react', {
		pageTitle: 'Learning React'
   	});
});

router.get('*', function(req, res){
	res.sendFile(path.resolve('./views/404.html'));
});

//export this router to use in our index.js
module.exports = router;