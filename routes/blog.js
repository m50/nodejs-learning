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
pool.connect();
var router = express.Router();

router.get('/api', (req, res) => {
	pool.query('SELECT id, time_written::timestamp AS date, text AS post, title FROM posts ORDER BY id DESC LIMIT 20', (err, posts) => {
		if(err) {
			res.status(404);
			res.json({ status: "Failure", error: err });
		} else {
			res.json({ status: "Success", posts: posts.rows });
		}
	});
});

router.get('/api/:id([0-9]+)', (req, res) => {
	pool.query('SELECT id, time_written::timestamp AS date, text AS post, title FROM posts WHERE id = $1', [ req.params.id ], (err, posts) => {
		if(err) {
			res.status(404);
			res.json({ status: "Failure", error: err });
		} else {
			res.json({ status: "Success", posts: posts.rows });
		}
	});
});

router.get('*', (req, res) => {
	res.render('blog', {
		pageTitle: 'Blog'
   	});
});

//export this router to use in our index.js
module.exports = router;