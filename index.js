const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const db = require('./server/config/sequelize');
const path = require('path');
const fetch = require('node-fetch');
const url = require('url');

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
var usedFishList = [];

function resolveFishers() {
	console.log("Checking for fishers:");
	fishersList.forEach(fisher => {
		console.log("handle ",fisher.name," fisher");

		reqURL = "https://secure-bastion-35148.herokuapp.com";

		const request = async () => {
			const response = await fetch(reqURL+`/api/fishes/level/${fisher.level}`, {
				method: 'GET',
				headers: {
					"Accept": "application/json",
				}
			});
			const fish = await response.json();
			console.log("HERE",fish);
			//Find an unused fish to assign to the fisher
			let randomFishIndex = Math.floor(Math.random() * fish.length);
			console.log("Random=",randomFishIndex);
			fishId = fish[randomFishIndex].id;
			while (usedFishList.includes(fishId)) {
				randomFishIndex = Math.floor(Math.random() * fish.length);
				console.log("Random=",randomFishIndex);
				fishId = fish[randomFishIndex].id; 
			}
			//Add the selected fish to our used list so we do not use it again
			usedFishList.push(fishId);
			//Update the fish to have lakeId equal null to let the user try to catch it
			const putrequest = async () => {
				const putresponse = await fetch(reqURL+`/api/fishes/removelake/${fishId}`, {
					method: 'PATCH',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				});
				const updatedFish = await putresponse.json();
				console.log("updated:", updatedFish);
				io.emit('fish assigned', updatedFish.id);
			}
			putrequest();
		}

		request();
	});
	usedFishList = [];
	fishersList = [];
}
setInterval(resolveFishers, 10000);

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('client message', function(msg) {
		console.log("broadcasting message: ", msg);
		io.emit('chat message', msg);
	});
	socket.on('fish request', function(fisher) {
		console.log("fish request from ", fisher.name);
		fishersList.push(fisher);
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
