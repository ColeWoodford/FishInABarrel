module.exports = (app, db) => {
	// create a lake
	app.post('/api/lakes', (req, res) => {
		db.lake.create(req.body)
			.then(lake => res.json(lake))
	})
	// get all lakes
	app.get('/api/lakes', (req, res) => {
		db.lake.findAll().then(lakes => res.json(lakes))
	})
};
