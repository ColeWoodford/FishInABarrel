import { actions } from '../actions/user-actions';

const initialState = {
		users: [],
	}

function UsersReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_USERS_SUCCESS:
			return Object.assign({}, state, {
				users: action.payload
			});
		case actions.GET_USERS_FAILURE:
			console.log("Failed to get users: ",action.payload);
			return state;
		default:		
			return state
	}
}

export default UsersReducer;
