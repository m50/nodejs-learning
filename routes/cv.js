const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('cv', {
		pageTitle: 'CV - Markus',
   	});
});

router.get('*', function(req, res){
   component.page404(req, res);
});

//export this router to use in our index.js
module.exports = router;