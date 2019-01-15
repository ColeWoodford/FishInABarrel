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
if (process.env.NODE_ENV == 'production') {
	app.use(express.static(path.resolve(__dirname, '../client.build')));

	app.get('/*', (request, response) => {
		response.sendFile(path.resolve(__dirname, '../client/build/index.html'));
	})
} else {
	app.use((req, res, next) => {
		res.header('Content-Type', 'application/json');
		next();
	});
}

router(app, db);

const PORT = process.env.PORT || 8000;
app.set('port', PORT);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log('Express listening on port:', PORT);
	});
});
