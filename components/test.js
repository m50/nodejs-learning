const express = require('express');
const path = require('path');

var component = {}

component.page404 = (req, res) => {
	res.sendFile(path.resolve('../views/404.html'));
}

module.exports = component;