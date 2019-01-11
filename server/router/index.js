const routes = [
	require('./routes/bait'),
	require('./routes/caughtfish'),
	require('./routes/fish'),
	require('./routes/fishingrods'),
	require('./routes/inventories'),
	require('./routes/lakes'),
	require('./routes/users'),
];


// Add access to the app and db objects to each route
module.exports = function router(app, db) {
	return routes.forEach((route) => {
	route(app, db);
	});
};