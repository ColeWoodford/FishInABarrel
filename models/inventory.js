module.exports = (sequelize, type) => {
	return sequelize.define('inventory', {
		id: {
			type: type.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		size: {
			type: type.INTEGER
		},
		money: {
			type: type.INTEGER
		}
	})
}