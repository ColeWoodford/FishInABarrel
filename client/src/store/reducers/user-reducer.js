import { actions } from '../actions/user-actions';

const initialState = {
		users: [],
		selectedUserInfo: null,
		adminMessage: ""
	}

function UsersReducer(state = initialState, action) {
	switch (action.type) {
		case actions.GET_USERS_SUCCESS:
			return {...state, users: action.payload};
		case actions.GET_USERS_FAILURE:
		return {...state, adminMessage: ("Failed to get users: ",action.payload)}
		case actions.DELETE_USER_SUCCESS:
			return {
				...state,
				users: state.users.filter(user => user.username !== action.payload),
				adminMessage: "Deleted user"
			};
		case actions.DELETE_USER_FAILURE:
			return {...state, adminMessage: ("Failed to delete user: ",action.payload)}
		case actions.GET_USER_INFO_SUCCESS:
			return {...state, selectedUserInfo: action.payload};
		default:		
			return state
	}
}

export default UsersReducer;
