module.exports = (app, db) => {
	// create a fishing rod
	app.post('/api/fishingrods/:inventoryId', (req, res) => {
		db.fishingRod.create({
			inventoryId: req.params.inventoryId,
			name: req.body.name,
			level: req.body.level,
			value: req.body.value
		})
			.then(fishingrod => res.json(fishingrod))
	})
	// get all fishingrods
	app.get('/api/fishingrods', (req, res) => {
		db.fishingRod.findAll().then(fishingrods => res.json(fishingrods))
	})
};