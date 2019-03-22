const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const db = require('./server/config/sequelize');
const path = require('path');

io.set('origins', '*localhost:3000*:*');

app.use(bodyParser.json())
const router = require('./server/router/index');

/**
 * For CRUD using sequelize:
 * @see https://lorenstewart.me/2016/10/03/sequelize-crud-101/
 */
router(app, db);

if (process.env.NODE_ENV == 'production') {
	app.use(express.static(path.resolve(__dirname, './client/build')));

	app.get('/*', (request, response) => {
		response.sendFile(path.resolve(__dirname, './client/build/index.html'));
	})
} else {
	app.use((req, res, next) => {
		res.header('Content-Type', 'application/json');
		next();
	});
}

var fishersList = [];

function resolveFishers() {
	console.log("Checking for fishers:");
	fishersList.forEach(username => {
		console.log("handle ",username," fisher");
		//get a fish from database and assign to player inv
	});
}
setInterval(resolveFishers, 10000);

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('client message', function(msg) {
		console.log("broadcasting message: ", msg);
		io.emit('chat message', msg);
	});
	socket.on('fish request', function(username) {
		console.log("fish request from ", username);
		fishersList.push(username);
		io.emit('fish response', "fishy");
	});
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

const PORT = process.env.PORT || 8000;
app.set('port', PORT);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
	http.listen(PORT, () => {
		console.log('Express listening on port:', PORT);
	});
});
