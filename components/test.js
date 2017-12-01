var express = require('express');

var component = {}

component.page404 = (req, res) => {
	res.sendFile('404.html');
}

module.exports = component;