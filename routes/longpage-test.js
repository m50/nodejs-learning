const express = require('express');
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
   component.page404(req, res);
});

//export this router to use in our index.js
module.exports = router;