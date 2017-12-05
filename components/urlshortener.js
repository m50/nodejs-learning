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
	client.get('urishort:uri:'+uri, (err, reply) => {
		var linkuri = 'http://l.clardy.eu/url/';
		if(err || reply == null) {
			const key = makeid();
			client.set("urishort:key:"+key, uri, 'EX', 604800);
			client.set("urishort:uri:"+uri, key, 'EX', 604800);
			linkuri += key;
			callback(linkuri);
		} else {
			linkuri += reply.toString();
			callback(linkuri);
		}
	});
};

component.getURI = (key, res) => {
	client.get("urishort:key:"+key, (err, reply) => {
		res.redirect(reply);
	});
};


module.exports = component;