module.exports = (app, db) => {
	const Op = db.Sequelize.Op;
	// create a fish
	app.post('/api/fishes/:lakeId', (req, res) => {
		db.fish.create({
			lakeId: req.params.lakeId,
			name: req.body.name,
			level: req.body.level,
			value: req.body.value,
			times_caught: req.body.times_caught
		})
			.then(fish => res.json(fish))
	})
	// get all fish
	app.get('/api/fishes', (req, res) => {
		db.fish.findAll().then(fishes => res.json(fishes))
	})
	// find fishes for a user based on level
	app.get('/api/fishes/level/:level', (req, res) => {
		db.fish.findAll({
			where: {
				level: {[Op.lt]: req.params.level}
			}
		}).then(fishes => res.json(fishes))
	})
};
