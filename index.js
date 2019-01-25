const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const db = require('./server/config/sequelize');
const path = require('path');
// const cors = require('cors');

const whitelist = ['localhost:3000', 'https://secure-bastion-35148.herokuapp.com'];
// const corsOptions = {
// 	origin: function(origin, callback) {
// 		if (whitelist.indexOf(origin) !== -1 || !origin) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error('Not allowed by CORS'));
// 		}
// 	}
// }

// app.use(cors(corsOptions));

// io.origins((origin, callback) => {
// 	console.log("HERE", origin);
// 	if (origin !== 'http://localhost:3000') {
// 		console.log("FAIL");
// 		return callback('origin not allowed', false);
// 	}
// 	callback(null, true);
// });
io.set('origins', '*localhost:3000*:*');

app.use(bodyParser.json())
const router = require('./server/router/index');

/**
 * For CRUD using sequelize:
 * @see https://lorenstewart.me/2016/10/03/sequelize-crud-101/
 */
if (process.env.NODE_ENV == 'production') {
	app.use(express.static(path.resolve(__dirname, './client/build')));

	app.get('./client/build/index.html/*', (request, response) => {
		response.sendFile(path.resolve(__dirname, './client/build/index.html'));
	})
} else {
	app.use((req, res, next) => {
		res.header('Content-Type', 'application/json');
		next();
	});
}

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('client message', function(msg) {
		console.log("broadcasting message: ", msg);
		io.emit('chat message', msg);
	})
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

router(app, db);

const PORT = process.env.PORT || 8000;
app.set('port', PORT);

//drop and resync with { force: true }
db.sequelize.sync().then(() => {
	http.listen(PORT, () => {
		console.log('Express listening on port:', PORT);
	});
});
