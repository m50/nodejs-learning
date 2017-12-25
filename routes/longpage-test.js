const express = require('express');
const path = require('path');
var router = express.Router();

router.get('/', function(req, res){
	res.render('loremipsum', {
		pageTitle: 'Long Page',
   	});
});
router.get('/:title', function(req, res){
	res.render('loremipsum', {
		pageTitle: req.params.title,
   	});
});

router.get('*', function(req, res){
	res.status(404);
	res.sendFile(path.resolve('./views/html/404.html'));
});

//export this router to use in our index.js
module.exports = router;