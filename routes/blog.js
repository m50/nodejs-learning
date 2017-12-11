const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Client } = require('pg');
const path = require('path');
const client = new Client({
	user: 'mailu',
	host: '127.0.0.1',
	port: 5432,
	database: 'blog',
	password: 'mailu-passwd'
});
var router = express.Router();

router.get('/', (req, res) => {
	res.render('blog', {
		pageTitle: 'Blog',
		post: '-1'
   	});
});

router.get('/:id(\d+)', (req, res) => {
	res.render('blog', {
		pageTitle: 'Blog',
		post: req.params.id
   	});
});

router.get('/posts', (req, res) => {
	client.connect();
	client.query('SELECT id, time_written AS date, text AS post FROM posts', (err, res) => {
		if(err) {
			res.status(404);
			res.json({ status: "Failure", error: err });
		} else {
			res.json({ status: "Success", posts: res });
		}
		cliend.end();
	});
});

router.get('/posts/:id(\d+)', (req, res) => {
	client.connect();
	client.query('SELECT id, time_written AS date, text AS post FROM posts WHERE id = $1::INT', [ req.params.id ], (err, res) => {
		if(err) {
			res.status(404);
			res.json({ status: "Failure", error: err });
		} else {
			res.json({ status: "Success", posts: res });
		}
		cliend.end();
	});
});

router.get('/wiki', (req, res) => {

});

router.get('*', (req, res) => {
	res.sendFile(path.resolve('./views/404.html'));
});

//export this router to use in our index.js
module.exports = router;