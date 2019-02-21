module.exports = (sequelize, type) => {
	return sequelize.define('inventoryitem', {
		id: {
			type: type.UUID,
			primaryKey: true,
			defaultValue: type.UUIDV4
		},
		name: {
			type: type.STRING
		},
		level: {
			type: type.INTEGER
    },
    value: {
      type: type.STRING
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