const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const BlogModel = require('./models/blog');
const TagModel = require('./models/tag');
const LakeModel = require('./models/lake');
const FishModel = require('./models/fish');
const InventoryModel = require('./models/inventory');
const FishingRodModel = require('./models/fishingrod');
const BaitModel = require('./models/bait');
const CaughtFishModel = require('./models/caughtfish');
const database_pass = require('./keys/database');
/**
 * Define details for connecting to the database.
 * @see https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
 */
const sequelize = new Sequelize('fish_in_barrel', 'root', database_pass, {
  host: 'localhost',
  dialect: 'mysql',
  port:    3306,
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

// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
const BlogTag = sequelize.define('blog_tag', {});
const UserLake = sequelize.define('user_lake', {});
const FishLake = sequelize.define('fish_lake', {});
const InventoryFishingRod = sequelize.define('inventory_fishingrod', {});
const InventoryBait = sequelize.define('inventory_bait', {});
const InventoryCaughtFish = sequelize.define('inventory_caughtfish', {});
const User = UserModel(sequelize, Sequelize)
const Blog = BlogModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Lake = LakeModel(sequelize, Sequelize);
const Fish = FishModel(sequelize, Sequelize);
const Inventory = InventoryModel(sequelize, Sequelize);
const FishingRod = FishingRodModel(sequelize, Sequelize);
const Bait = BaitModel(sequelize, Sequelize);
const CaughtFish = CaughtFishModel(sequelize, Sequelize);

User.belongsTo(Lake);
Blog.belongsTo(User);
Fish.belongsTo(Lake);
Inventory.belongsTo(User);
FishingRod.belongsTo(Inventory);
Bait.belongsTo(Inventory);
CaughtFish.belongsTo(Inventory);
Blog.belongsToMany(Tag, { through: BlogTag, unique: false });
Inventory.belongsToMany(FishingRod, { through: InventoryFishingRod, unique: false });
Inventory.belongsToMany(Bait, { through: InventoryBait, unique: false });
Inventory.belongsToMany(CaughtFish, { through: InventoryCaughtFish, unique: false });
Tag.belongsToMany(Blog, { through: BlogTag, unique: false });
Lake.belongsToMany(User, { through: UserLake, unique: false});
Lake.belongsToMany(Fish, { through: FishLake, unique: false});

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
  User,
  Lake,
  Fish,
  Inventory,
  FishingRod,
  Bait,
  CaughtFish,
  Blog,
  Tag
}