var express = require('express');
var router = express.Router();
var component = require('../components/test.js');

router.get('/', function(req, res){
   res.send('GET route on test.');
});
router.get('/:name', function(req, res){
   res.send('GET route on test, with name: '+req.params.name);
});
router.get('/:name/:id([0-9]{3,6})', function(req, res){
	if(req.params.id == '404') {
		component.page404(req, res);
	} else {
	   res.send('GET route on test, with id: ' + req.params.id + '; name: ' + req.params.name);
	}
});
router.post('/', function(req, res){
   res.send('POST route on test.');
});

router.get('*', function(req, res){
   component.page404(req, res);
});

//export this router to use in our index.js
module.exports = router;