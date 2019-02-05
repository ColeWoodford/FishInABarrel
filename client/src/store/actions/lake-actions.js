export const actions = {
	SELECT_TILE: 'SELECT_TILE',
	GET_LAKES: 'GET_LAKES',
	GET_LAKES_SUCCESS: 'GET_LAKES_SUCCESS',
	GET_LAKES_FAILURE: 'GET_LAKES_FAILURE',
	NEW_LAKE: 'NEW_LAKE',
	NEW_LAKE_SUCCESS: 'NEW_LAKE_SUCCESS',
	NEW_LAKE_FAILURE: 'NEW_LAKE_FAILURE',
}

export const selectTile = () => ({
	type: actions.SELECT_TILE,
	payload: null,
});

export const getLakes = () => ({
	type: actions.GET_LAKES,
	payload: null,
});

export const newLake = (name = "") => ({
	type: actions.NEW_LAKE,
	payload: name,
});
