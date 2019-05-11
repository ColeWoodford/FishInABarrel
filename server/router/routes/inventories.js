module.exports = (app, db) => {
	// create an inventory
	app.post('/api/inventories/:userId', (req, res) => {
		db.inventory.create(req.body)
			.then(inventory => res.json(inventory))
	})
	// get all inventories
	app.get('/api/inventories', (req, res) => {
		db.inventory.findAll().then(inventories => res.json(inventories))
	})
	//add money to an inventory
	app.patch('/api/inventory/:invId/addmoney/:value', (req, res) => {
		db.inventory.findOne({
			where: {
				id: req.params.invId
			}
		})
		.then(inv => {
			return inv.updateAttributes({
				money: req.params.value
			})
		})
		.then(updatedFish => {
			res.json(updatedFish);
		})
	})
	//get a inventory
	app.get('/api/inventory/:invId', (req, res) => {
		db.inventory.find({
			where: {
				id: req.params.invId
			}
		})
		.then(inventory => res.json(inventory));
	})
	//get a user's inventory
	app.get('/api/inventories/:userId', (req, res) => {
		db.inventory.find({
			where: {
				userId: req.params.userId
			}
		})
		.then(inventory => res.json(inventory));
	})
	// Delete a inventory
	app.delete('/api/inventories/:userId', (req, res) => {
		db.inventory.destroy({
			where: { userId: req.params.userId }
		})
		.then(deletedInv => {
			res.json(deletedInv);
		})
	})
};
