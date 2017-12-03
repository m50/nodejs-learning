const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var router = express.Router();

router.use(cookieParser());
router.use(session({
	secret: "Shh! It's a secret!",
	resave: true,
    saveUninitialized: true
}));

router.get('/', function(req, res){
	if(req.session.page_views) {
		req.session.page_views++;
	} else {
		req.session.page_views = 1;
	}
	res.render('root', {
		title: "Root",
		url: "https://clardy.eu/markus",
		visits: req.session.page_views
   	});
});
router.post('/', function(req, res){
   	res.render('root');
});

//export this router to use in our index.js
module.exports = router;