module.exports = (sequelize, type) => {
	return sequelize.define('fish', {
		id: {
			type: type.UUID,
			primaryKey: true,
			defaultValue: type.UUIDV4
		},
		name: {
			type: type.STRING
		},
		level: {
			type: type.STRING
		},
		value: {
			type: type.INTEGER
		},
		times_caught: {
			type: type.INTEGER
		},
		category: {
      type: type.STRING
    },
    type: {
      type: type.STRING
    },
    bgcolor: {
      type: type.STRING
    }
	})
}