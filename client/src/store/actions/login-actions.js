export const actions = {
	LOGIN: 'LOGIN',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_BAD: 'LOGIN_BAD',
	LOGIN_FAILURE: 'LOGIN_FAILURE',
	CREATE_USER: 'CREATE_USER',
	CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
	CREATE_USER_FAILURE: 'CREATE_USER_FAILURE'
}

export const login = (user) => ({
	type: actions.LOGIN,
	payload: user,
});

export const createUser = (user) => ({
	type: actions.CREATE_USER,
	payload: user,
});