const express = require('express');

var component = {};

component.page_views = (req) => {
	if(req.session.page_views) {
		req.session.page_views++;
	} else {
		req.session.page_views = 1;
	}
};

component.get_req = (req) => {
	if (req.query.name) {
		return req.query.name;
	} else {
		return "Home";
	}
};

module.exports = component;