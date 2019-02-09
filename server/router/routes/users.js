module.exports = (app, db) => {
	function isUserUnique(username) {
		return db.user.count({
			where: {
				username: username
			}
		})
		.then(count => {
			if (count != 0) {
				return false;
			}
			return true;
		});
	}
	// create a user
	app.post('/api/users/:username/lake/:lakeId', (req, res) => {
		isUserUnique(req.params.username).then(isUnique => {
			if (isUnique) {
				db.user.create(req.body)
					.then(user => res.json(user))
			} else {
				res.json('duplicate')
			}
		})

		
	})
	// get all users
	app.get('/api/users', (req, res) => {
		db.user.findAll().then(users => res.json(users))
	})
	// get user based on username and password
	app.get('/api/users/:username/:password', (req, res) => {
		db.user.find({
			where: {
				username: req.params.username,
				password: req.params.password
			}
		})
		.then(user => res.json(user));
	})

	// Delete a user
	app.delete('/api/users/:username', (req, res) => {
		db.user.destroy({
			where: { username: req.params.username }
		})
		.then(deletedUser => {
			res.json(req.params.username);
		})
	})
};