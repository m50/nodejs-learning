const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const component = require('../components/mail.js');
var upload = multer();
var router = express.Router();

router.get('/mail/policies', (req, res, next) => {
	component.getPolicies(req, res, next);
});

module.exports = router;