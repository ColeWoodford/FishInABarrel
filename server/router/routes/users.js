module.exports = (app, db) => {
	// create a user
	app.post('/api/users/:lakeId', (req, res) => {
		db.user.create({
			lakeId: req.params.lakeId,
			username: req.body.username,
			password: req.body.password
		})
			.then(user => res.json(user))
	})
	// get all users
	app.get('/api/users', (req, res) => {
		db.user.findAll().then(users => res.json(users))
	})
};