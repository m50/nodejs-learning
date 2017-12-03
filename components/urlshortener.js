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

component.createShortener = (uri) => {
	const key = makeid();
	client.set("urishort:"+key, uri);
	console.log('Key: '+key+"; URI: "+uri);
	return key;
};

component.getURI = (key, res) => {
	client.get("urishort:"+key, (err, reply) => {
		console.log("getURI: Key="+key+"; URL="+reply);
		res.redirect(reply);
	});
};


module.exports = component;