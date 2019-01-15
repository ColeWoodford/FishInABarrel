const Sequelize = require('sequelize');
const database_pass = require('../keys/database');

/**
 * Define details for connecting to the database.
 * @see https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
 */
const sequelize = new Sequelize('fish_in_barrel', 'root', database_pass, {
  host: 'localhost',
  dialect: 'mysql',
  port:    process.env.PORT || 3306,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false // true by default
  }
})

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user')(sequelize, Sequelize);
db.blog = require('../models/blog')(sequelize, Sequelize);
db.tag = require('../models/tag')(sequelize, Sequelize);
db.lake = require('../models/lake')(sequelize, Sequelize);
db.fish = require('../models/fish')(sequelize, Sequelize);
db.inventory = require('../models/inventory')(sequelize, Sequelize);
db.fishingRod = require('../models/fishingrod')(sequelize, Sequelize);
db.bait = require('../models/bait')(sequelize, Sequelize);
db.caughtFish = require('../models/caughtfish')(sequelize, Sequelize);

db.user.belongsTo(db.lake);
db.blog.belongsTo(db.user);
db.fish.belongsTo(db.lake);
db.inventory.belongsTo(db.user);
db.fishingRod.belongsTo(db.inventory);
db.bait.belongsTo(db.inventory);
db.caughtFish.belongsTo(db.inventory);

module.exports = db