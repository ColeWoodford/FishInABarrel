module.exports = (app, db) => {
	// create an inventory item
	app.post('/api/inventoryitems/:invId', (req, res) => {
		db.inventoryitem.create(req.body)
			.then(inventoryitem => res.json(inventoryitem))
	})
	// get all inventory items
	app.get('/api/inventoryitems', (req, res) => {
		db.inventory.findAll().then(inventories => res.json(inventories))
	})
	//get an inventory's items
	app.get('/api/inventoryitems/:invId', (req, res) => {
		db.inventoryitem.findAll({
			where: {
				inventoryId: req.params.invId
			}
		})
		.then(inventoryitems => res.json(inventoryitems));
	})
	// Delete a inventory item
	app.delete('/api/inventoryitems/:id', (req, res) => {
		db.inventoryitem.destroy({
			where: { id: req.params.id }
		})
		.then(deletedInvItem => {
			res.json(deletedInvItem);
		})
	})
};
