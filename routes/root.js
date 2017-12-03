const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const component = require('../components/root.js');
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
	res.render('root', {
		title: title,
		url: "https://clardy.eu/markus/",
		visits: req.session.page_views
   	});
});
router.post('/', function(req, res){
	component.page_views(req);
	res.render('root', {
		title: "Root",
		url: "https://l.clardy.eu/url",
		visits: req.session.page_views
   	});
});

//export this router to use in our index.js
module.exports = router;