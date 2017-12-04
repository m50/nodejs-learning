const express = require('express');
const redis = require('redis');
client = redis.createClient();

var component = {};
var BreakException = {};

function makeid() {
  var text = "";
  var possible = "-abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

component.createShortener = (uri, res, callback) => {
	client.get('urishort:'+uri, (err, reply) => {
		const link = 'http://l.clardy.eu/url/';
		if(err) {
			const key = makeid();
			client.set("urishort:"+key, uri);
			client.set("urishort:"+uri, key);
			link = "http://l.clardy.eu/url/"+key;
			callback(res, link);
		} else {
			link = "http://l.clardy.eu/url/"+reply;
			console.log(reply);
			callback(res, link);
		}
	});
};

component.getURI = (key, res) => {
	client.get("urishort:"+key, (err, reply) => {
		res.redirect(reply);
	});
};


module.exports = component;