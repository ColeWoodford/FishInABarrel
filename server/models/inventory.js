module.exports = (sequelize, type) => {
	return sequelize.define('inventory', {
		id: {
			type: type.UUID,
			primaryKey: true,
			defaultValue: type.UUIDV4
		},
		userId: {
			type: type.UUID,
			allowNull: false
		},
		size: {
			type: type.INTEGER
		},
		money: {
			type: type.INTEGER
		}
	})
}