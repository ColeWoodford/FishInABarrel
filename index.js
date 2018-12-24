const express = require('express')
const bodyParser = require('body-parser')
// dependencies
const { User, Lake, Fish, Inventory, FishingRod, Bait, CaughtFish, Blog, Tag } = require('./sequelize')

const app = express()
app.use(bodyParser.json())

/**
 * API Endpoints
 * For CRUD using sequelize:
 * @see https://lorenstewart.me/2016/10/03/sequelize-crud-101/
 */

// create a lake
app.post('/api/lakes', (req, res) => {
	Lake.create(req.body)
		.then(lake => res.json(lake))
})
// get all lakes
app.get('/api/lakes', (req, res) => {
	Lake.findAll().then(lakes => res.json(lakes))
})

// create a user
app.post('/api/users/:lakeId', (req, res) => {
	User.create({
		lakeId: req.params.lakeId,
		username: req.body.username,
		password: req.body.password
	})
		.then(user => res.json(user))
})
// get all users
app.get('/api/users', (req, res) => {
	User.findAll().then(users => res.json(users))
})

// create a fish
app.post('/api/fishes/:lakeId', (req, res) => {
	Fish.create({
		lakeId: req.params.lakeId,
		name: req.body.name,
		level: req.body.level,
		value: req.body.value
	})
		.then(fish => res.json(fish))
})
// get all fish
app.get('/api/fishes', (req, res) => {
	Fish.findAll().then(fishes => res.json(fishes))
})

// create an inventory
app.post('/api/inventories/:userId', (req, res) => {
	Inventory.create({
		userId: req.params.userId,
		size: req.body.size,
		money: req.body.money
	})
		.then(inventory => res.json(inventory))
})
// get all inventories
app.get('/api/inventories', (req, res) => {
	Inventory.findAll().then(inventories => res.json(inventories))
})

// create a fishing rod
app.post('/api/fishingrods/:inventoryId', (req, res) => {
	FishingRod.create({
		inventoryId: req.params.inventoryId,
		name: req.body.name,
		level: req.body.level,
		value: req.body.value
	})
		.then(fishingrod => res.json(fishingrod))
})
// get all fishingrods
app.get('/api/fishingrods', (req, res) => {
	FishingRod.findAll().then(fishingrods => res.json(fishingrods))
})

// create a bait
app.post('/api/baits/:inventoryId', (req, res) => {
	Bait.create({
		inventoryId: req.params.inventoryId,
		name: req.body.name,
		level: req.body.level,
		value: req.body.value
	})
		.then(bait => res.json(bait))
})
// get all baits
app.get('/api/baits', (req, res) => {
	Bait.findAll().then(baits => res.json(baits))
})

// create a caught fish
app.post('/api/caughtfishes/:inventoryId', (req, res) => {
	CaughtFish.create({
		inventoryId: req.params.inventoryId,
		name: req.body.name,
		level: req.body.level,
		value: req.body.value
	})
		.then(caughtfish => res.json(caughtfish))
})
// get all caught fish
app.get('/api/caughtfishes', (req, res) => {
	CaughtFish.findAll().then(caughtfish => res.json(caughtfish))
})

// create a blog post
app.post('/api/blogs', (req, res) => {
	const body = req.body
	// either find a tag with name or create a new one
	const tags = body.tags.map(tag => Tag.findOrCreate({ where: { name: tag.name }, defaults: { name: tag.name }})
										.spread((tag, created) => tag))
	User.findById(body.userId)
		.then(() => Blog.create(body))
		.then(blog => Promise.all(tags).then(storedTags => blog.addTags(storedTags)).then(() => blog))
		.then(blog => Blog.findOne({ where: {id: blog.id}, include: [User, Tag]}))
		.then(blogWithAssociations => res.json(blogWithAssociations))
		.catch(err => res.status(400).json({ err: `User with id = [${body.userId}] doesn\'t exist.`}))
})

// find blogs belonging to one user or all blogs
app.get('/api/blogs/:userId?', (req, res) => {
	let query;
	if(req.params.userId) {
		query = Blog.findAll({ include: [
			{ model: User, where: { id: req.params.userId } },
			{ model: Tag }
		]})
	} else {
		query = Blog.findAll({ include: [Tag, User]})
	}
	return query.then(blogs => res.json(blogs))
})

// find blogs by tag
app.get('/api/blogs/:tag/tag', (req, res) => {
	Blog.findAll({
		include: [
			{ model: Tag, where: { name: req.params.tag } }
		]
	})
	.then(blogs => res.json(blogs))
})

const port = 3000
app.listen(port, () => {
	console.log(`Running on http://localhost:${port}`)
})