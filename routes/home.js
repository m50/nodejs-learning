const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const component = require('../components/home.js');
var router = express.Router();

router.use(cookieParser());
router.use(session({
	secret: "Shh! It's a secret!",
	resave: true,
    saveUninitialized: true
}));

router.get('/', function(req, res){
	component.page_views(req);
	const title = component.get_req(req);
	const unlocked = req.session.page_views >= 5;
	res.render('home', {
		pageTitle: title,
		url: "http://l.clardy.eu/url",
		visits: req.session.page_views,
		unlocked: unlocked
   	});
});

//export this router to use in our index.js
module.exports = router;