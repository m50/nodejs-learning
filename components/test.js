const express = require('express');

var component = {}

component.page404 = (req, res) => {
	res.sendFile(__dirname+'/../views/404.html');
}

module.exports = component;