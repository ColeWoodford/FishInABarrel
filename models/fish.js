module.exports = (sequelize, type) => {
	return sequelize.define('fish', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: type.STRING
		},
		level: {
			type: type.STRING
		},
		value: {
			type: type.INTEGER
		}
	})
}