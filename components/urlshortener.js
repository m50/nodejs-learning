const express = require('express');
const redis = require('redis');
client = redis.createClient();

var component = {};

function makeid() {
  var text = "";
  var possible = "-abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

component.createShortener = (uri, res, callback) => {
	client.keys('urishort:*' (err, keys) => {
		if(err) {
			const key = makeid();
			client.set("urishort:"+key, uri);
			const uri = "http://l.clardy.eu/url/"+component.createShortener(req.body.url);
			callback(res, uri);
		} else {
			keys.forEach((key) => {
				client.get(key, (err, reply) => {
					if(err) {
						const key = makeid();
						client.set("urishort:"+key, uri);
						const uri = "http://l.clardy.eu/url/"+component.createShortener(req.body.url);
						callback(res, uri);
					}
					const uri = "http://l.clardy.eu/url/"+reply;
					callback(res, uri);
				});
			});
		}
	});
};

component.getURI = (key, res) => {
	client.get("urishort:"+key, (err, reply) => {
		res.redirect(reply);
	});
};


module.exports = component;