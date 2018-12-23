module.exports = (sequelize, type) => {
	return sequelize.define('user', {
		userName: type.STRING,
		password: type.STRING
	})
}