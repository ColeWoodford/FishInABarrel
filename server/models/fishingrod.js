module.exports = (sequelize, type) => {
	return sequelize.define('fishingrod', {
		id: {
			type: type.UUID,
			primaryKey: true,
			defaultValue: type.UUIDV4
		},
		inventory_id: {
			type: type.UUID,
			allowNull: false
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