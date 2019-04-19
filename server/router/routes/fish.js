module.exports = (app, db) => {
	const Op = db.Sequelize.Op;

	// create a fish
	app.post('/api/fishes/:lakeId', (req, res) => {
		db.fish.create({
			lakeId: req.params.lakeId,
			name: req.body.name,
			level: req.body.level,
			value: req.body.value,
			category: "inBag",
			type: "fish",
			bgcolor: "blue",
			times_caught: req.body.times_caught
		})
			.then(fish => res.json(fish))
	})

	//null lakeId for fish
	app.patch('/api/fishes/removelake/:fishId', (req, res) => {
		db.fish.findOne({
			where: {
				id: req.params.fishId
			}
		})
		.then(fish => {
			return fish.updateAttributes({
				lakeId: null
			})
		})
		.then(updatedFish => {
			res.json(updatedFish);
		})
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

	//catch a fish by assigning it to the user's inventory
	app.patch('/api/fishes/inventory/:inventoryId/catchfish/:fishId', (req, res) => {
		db.fish.findOne({
			where: {
				id: req.params.fishId
			}
		})
		.then(fish => {
			return fish.updateAttributes({
				inventoryId: req.params.inventoryId
			})
		})
		.then(updatedFish => {
			res.json(updatedFish);
		})
	})

	//release a fish by assigning it to the lake
	app.patch('/api/fishes/lake/:lakeId/releasefish/:fishId', (req, res) => {
		db.fish.findOne({
			where: {
				id: req.params.fishId
			}
		})
		.then(fish => {
			return fish.updateAttributes({
				lakeId: req.params.lakeId
			})
		})
		.then(updatedFish => {
			res.json(updatedFish);
		})
	})
};
