const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
var router = express.Router();

router.get('/', (req, res) => {
	if(req.query.getPosts) {
		return;
	}
	res.render('blog', {
		pageTitle: 'Blog',
		post: '-1'
   	});
});

router.get('/:id(\d+)', (req, res) => {
	if(req.query.getPost) {
		return;
	}
	res.render('blog', {
		pageTitle: 'Blog',
		post: req.params.id
   	});
});

router.get('/posts', (req, res) => {
	res.json
});

router.get('/posts/:id(\d+)' (req, res) => {

});

router.get('/wiki', (req, res) => {

});

router.get('*', (req, res) => {
	res.sendFile(path.resolve('./views/404.html'));
});

//export this router to use in our index.js
module.exports = router;