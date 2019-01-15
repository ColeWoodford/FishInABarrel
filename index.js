const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/config/sequelize');
const router = require('./server/router/index');

const app = express()
app.use(bodyParser.json())

/**
 * For CRUD using sequelize:
 * @see https://lorenstewart.me/2016/10/03/sequelize-crud-101/
 */

app.use((req, res, next) => {
	res.header('Content-Type', 'application/json');
	next();
});

	router(app, db);

const PORT = process.env.PORT || 8000

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log('Express listening on port:', PORT);
	});
});
