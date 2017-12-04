const express = require('express');
const path = require('path');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/mail';
const client = new pg.Client(connectionString);


var component = {}

component.getPolicies = (res, req, next) => {
	pg.connect(connectionString, (err, client, done) => {
		var results = [];
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({success: false, data: err});
		}
		const q = "SELECT * FROM policy;";
		const query = client.query(q);
		query.on('row', (row) => {
			results.push(row);
		});

		query.on('end', () => {
			done();
			return res.json(results);
		});
	});
};

module.exports = component;