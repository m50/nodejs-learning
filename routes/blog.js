const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { Pool } = require('pg');
const path = require('path');
const pool = new Pool({
	user: 'mailu',
	host: '127.0.0.1',
	port: 5432,
	database: 'blog',
	password: 'mail-passwd'
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
	await pool.connect();
	try {
		var posts = await pool.query('SELECT id, time_written AS date, text AS post FROM posts');
		res.json({ status: "Success", posts: posts });
	} catch (err) {
		res.status(404);
		res.json({ status: "Failure", error: err });		
	}
	await pool.end();
});

router.get('/posts/:id(\d+)', (req, res) => {
	pool.connect();
	try {
		var posts = await pool.query('SELECT id, time_written AS date, text AS post FROM posts WHERE id = $1', [ req.params.id ]);
		res.json({ status: "Success", posts: posts });
	} catch (err) {
		res.status(404);
		res.json({ status: "Failure", error: err });		
	}
	await pool.end();
});

router.get('/wiki', (req, res) => {

});

router.get('*', (req, res) => {
	res.sendFile(path.resolve('./views/404.html'));
});

//export this router to use in our index.js
module.exports = router;