var express = require('express');

var component = {}

component.page404 = (req, res) => {
	res.sendFile('/var/www/nodejs/views/404.html');
}

module.exports = component;