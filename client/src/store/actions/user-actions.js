export const actions = {
	GET_USERS: 'GET_USERS',
	GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
	GET_USERS_FAILURE: 'GET_USERS_FAILURE',
	DELETE_USER: 'DELETE_USER',
	DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
	DELETE_USER_FAILURE: 'DELETE_USER_FAILURE',
	GET_USER_INFO: "GET_USER_INFO",
	GET_USER_INFO_SUCCESS: "GET_USER_INFO_SUCCESS",
	GET_USER_INFO_FAILURE: "GET_USER_INFO_FAILURE",
}

export const getUsers = () => ({
	type: actions.GET_USERS,
	payload: null,
});

export const getUserInfo = (userId) => ({
	type: actions.GET_USER_INFO,
	payload: userId,
});

export const deleteUser = (user) => ({
	type: actions.DELETE_USER,
	payload: user
})
