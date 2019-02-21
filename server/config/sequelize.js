const Sequelize = require('sequelize');
const database_pass = require('../keys/database');

/**
 * Define details for connecting to the database.
 * @see https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
 */
// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
var db = {};

let sequelize;

if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
  })
} else {
  sequelize = new Sequelize('fish_in_barrel', 'root', database_pass, {
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
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../models/user')(sequelize, Sequelize);
db.blog = require('../models/blog')(sequelize, Sequelize);
db.tag = require('../models/tag')(sequelize, Sequelize);
db.lake = require('../models/lake')(sequelize, Sequelize);
db.fish = require('../models/fish')(sequelize, Sequelize);
db.inventory = require('../models/inventory')(sequelize, Sequelize);
db.inventoryitem = require('../models/inventoryitem')(sequelize, Sequelize);
db.fishingRod = require('../models/fishingrod')(sequelize, Sequelize);
db.bait = require('../models/bait')(sequelize, Sequelize);
db.caughtFish = require('../models/caughtfish')(sequelize, Sequelize);

db.fish.belongsTo(db.lake, {onDelete: 'cascade', hooks: true});

db.user.belongsTo(db.lake, {onDelete: 'cascade', hooks: true});
db.inventory.belongsTo(db.user, {onDelete: 'cascade', hooks: true});
db.inventoryitem.belongsTo(db.inventory, {onDelete: 'cascade', hooks: true});

db.blog.belongsTo(db.user);
db.fishingRod.belongsTo(db.inventory, {onDelete: 'cascade', hooks: true});
db.bait.belongsTo(db.inventory, {onDelete: 'cascade', hooks: true});
db.caughtFish.belongsTo(db.inventory, {onDelete: 'cascade', hooks: true});

module.exports = db