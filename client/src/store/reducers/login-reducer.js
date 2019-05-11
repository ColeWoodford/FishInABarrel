import { actions } from '../actions/login-actions';

const initialState = {
		username: null,
		userId: null,
		isNewUser: 0
	}

function LoginReducer(state = initialState, action) {
	switch (action.type) {
    case actions.LOGIN_SUCCESS:
			return {...state, username: action.payload.username, userId: action.payload.id};
		case actions.LOGIN_BAD:
			return {...state, username: null};
		case actions.LOGIN_FAILURE:
			console.log("Failed ", action.payload);
			return state;
    case actions.CREATE_USER_SUCCESS:
			return {...state, username: action.payload.username, userId: action.payload.id, isNewUser: 1};
		case actions.CREATE_USER_FAILURE:
			console.log("Failed ", action.payload);
			return state;
		default:
			return state
	}
}

export default LoginReducer;
