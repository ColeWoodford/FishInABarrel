module.exports = (sequelize, type) => {
	return sequelize.define('lake', {
		lakeName: {
			type: type.STRING,
			allowNull: false
		}
	})
}