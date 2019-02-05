import { actions } from '../actions/login-actions';

const initialState = {
		username: null
	}

function LoginReducer(state = initialState, action) {
	switch (action.type) {
    case actions.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				username: action.payload
			});
		case actions.LOGIN_BAD:
			return Object.assign({}, state, {
				username: null
			});
		case actions.LOGIN_FAILURE:
			console.log("Failed ", action.payload);
			return state;
    case actions.CREATE_USER_SUCCESS:
			return Object.assign({}, state, {
				username: action.payload
			});
		case actions.CREATE_USER_FAILURE:
			console.log("Failed ", action.payload);
			return state;
		default:
			return state
	}
}

export default LoginReducer;
