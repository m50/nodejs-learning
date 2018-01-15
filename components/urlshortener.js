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

component.createShortener = (uri, callback) => {
	client.get('urishort:uri:'+uri, (err, reply) => {
		var linkuri = 'https://clardy.eu/url/';
		if(err || reply == null) {
			const key = makeid();
			client.set("urishort:key:"+key, uri, 'EX', 604800);
			client.set("urishort:uri:"+uri, key, 'EX', 604800);
			linkuri += key;
			callback(key, linkuri);
		} else {
			linkuri += reply.toString();
			callback(reply, linkuri);
		}
	});
};

component.editShortener = (newURI, key, success, failure) => {
	client.get('urishort:key:'+key, (err, reply) => {
		var linkuri = 'https://clardy.eu/url/'+newURI;
		if(err || reply == null) {
			failure();
		} else {
			client.del('urishort:key:'+key);
			client.del('urishort:url:'+reply);
			client.set("urishort:key:"+key, uri, 'EX', 604800);
			client.set("urishort:url:"+newURI, key, 'EX', 604800);
			success(key, linkuri);
		}
	});
};

component.deleteShortener = (key, success, failure) => {
	client.get('urishort:key:'+key, (err, reply) => {
		if(err || reply == null) {
			failure();
		} else {
			client.del('urishort:key:'+key);
			client.del('urishort:url:'+reply);
			success();
		}
	});
};

component.redirectURI = (key, res) => {
	client.get("urishort:key:"+key, (err, reply) => {
		res.redirect(reply);
	});
};

component.getDatabase = (failure, success) => {
	client.keys('urishort:key:*', (err, keys) => {
		if(err) {
			failure();
		} else {
			success(keys.map(key => key.substring(13)));
		}
	});
};

component.getURI = (key, failure, success) => {
	client.get('urishort:key:'+key, (err, reply) => {
		if(err || reply == null) {
			failure();
		} else {
			success(key, reply);
		}
	});
};


module.exports = component;