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

component.getURI = (key) => {
	return client.get("urishort:"+key);
};


module.exports = component;