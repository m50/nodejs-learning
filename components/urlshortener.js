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
	const key = makeid();
	client.set("urishort:"+key, uri);
	client.set("urishort:"+uri, key);
	const link = "http://l.clardy.eu/url/"+key;
	callback(res, link);
	// client.keys('urishort:*', (err, keys) => {
	// 	if(!err) {
	// 		keys.some((key) => {
	// 			console.log(key);
	// 			client.get(key, (err, reply) => {
	// 				const uri = '';
	// 				if(!err) {
	// 					uri = "http://l.clardy.eu/url/"+reply;
	// 					console.log(uri);
	// 					callback(res, uri);
	// 					return true;
	// 				}
	// 			});
	// 		});
	// 	}
	// });
};

component.getURI = (key, res) => {
	client.get("urishort:"+key, (err, reply) => {
		res.redirect(reply);
	});
};


module.exports = component;