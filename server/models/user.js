module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		id: {
			type: type.UUID,
			primaryKey: true,
			defaultValue: type.UUIDV4
		},
		username: type.STRING,
		password: type.STRING,
	})
}