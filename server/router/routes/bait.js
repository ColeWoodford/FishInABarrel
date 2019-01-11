module.exports = (app, db) => {
	// create a bait
	app.post('/api/baits/:inventoryId', (req, res) => {
		db.bait.create({
			inventoryId: req.params.inventoryId,
			name: req.body.name,
			level: req.body.level,
			value: req.body.value
		})
			.then(bait => res.json(bait))
	})
	// get all baits
	app.get('/api/baits', (req, res) => {
		db.bait.findAll().then(baits => res.json(baits))
	})
};