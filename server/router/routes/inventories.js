module.exports = (app, db) => {
	// create an inventory
	app.post('/api/inventories/:userId', (req, res) => {
		db.inventory.create({
			userId: req.params.userId,
			size: req.body.size,
			money: req.body.money
		})
			.then(inventory => res.json(inventory))
	})
	// get all inventories
	app.get('/api/inventories', (req, res) => {
		db.inventory.findAll().then(inventories => res.json(inventories))
	})
};