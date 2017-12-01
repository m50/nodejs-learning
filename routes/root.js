var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('index.html', {
		title: "Root",
		url: "https://clardy.eu/markus"
   	});
});
router.post('/', function(req, res){
   	res.render('first_view');
});

//export this router to use in our index.js
module.exports = router;