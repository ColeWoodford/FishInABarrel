module.exports = (sequelize, type) => {
	return sequelize.define('lake', {
		id: {
			type: type.UUID,
			primaryKey: true,
			defaultValue: type.UUIDV4
		},
		lake_name: {
			type: type.STRING,
			allowNull: false
		},
	})
}