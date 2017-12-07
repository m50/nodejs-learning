const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var router = express.Router();

router.get('/', function(req, res){
	res.render('react', {
		pageTitle: 'Learning React'
   	});
});

//export this router to use in our index.js
module.exports = router;