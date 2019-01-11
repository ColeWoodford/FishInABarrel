module.exports = (app, db) => {
	// create a caught fish
	app.post('/api/caughtfishes/:inventoryId', (req, res) => {
		db.caughtFish.create({
			inventoryId: req.params.inventoryId,
			name: req.body.name,
			level: req.body.level,
			value: req.body.value
		})
			.then(caughtfish => res.json(caughtfish))
	})
	// get all caught fish
	app.get('/api/caughtfishes', (req, res) => {
		db.caughtFish.findAll().then(caughtfish => res.json(caughtfish))
	})
};