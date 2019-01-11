module.exports = (app, db) => {
	// create a fish
	app.post('/api/fishes/:lakeId', (req, res) => {
		db.fish.create({
			lakeId: req.params.lakeId,
			name: req.body.name,
			level: req.body.level,
			value: req.body.value
		})
			.then(fish => res.json(fish))
	})
	// get all fish
	app.get('/api/fishes', (req, res) => {
		db.fish.findAll().then(fishes => res.json(fishes))
	})
};