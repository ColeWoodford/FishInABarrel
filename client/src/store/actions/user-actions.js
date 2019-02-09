export const actions = {
	GET_USERS: 'GET_USERS',
	GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
	GET_USERS_FAILURE: 'GET_USERS_FAILURE',
	DELETE_USER: 'DELETE_USER',
	DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
	DELETE_USER_FAILURE: 'DELETE_USER_FAILURE'
}

export const getUsers = () => ({
	type: actions.GET_USERS,
	payload: null,
});

export const deleteUser = (username) => ({
	type: actions.DELETE_USER,
	payload: username
})
