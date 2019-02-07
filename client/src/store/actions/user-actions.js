export const actions = {
	GET_USERS: 'GET_USERS',
	GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
	GET_USERS_FAILURE: 'GET_USERS_FAILURE',
}

export const getUsers = () => ({
	type: actions.GET_USERS,
	payload: null,
});
